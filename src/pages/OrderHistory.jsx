import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify'; // Import toast
import BgRoad from "../assets/images/bg-road.svg";
import arrow from "../assets/images/arrow.png";
import { IconFlag, IconLocation } from "../assets/icons/icon";
import { Link } from "react-router-dom";
import Alerts from "../common/Alerts";
import { useGetDataWithAuth, usePostDataWithAuth } from "../utils/Api";

const OrderHistory = () => {
  const { postDataWithAuth } = usePostDataWithAuth();
  const { getDataWithAuth } = useGetDataWithAuth();
  const [wallet_balance, setWalletBalance] = useState("");
  const [user_detail, setUserDetail] = useState({ name: "", student_id: "" });
  const [pendingkot, setPendingKot] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);

  // State for handling the date inputs for search
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
   

    // Fetch order list initially
    fetchOrderList();
  }, []);

  // Function to fetch order list, with optional date filters
  const fetchOrderList = (from = "", to = "") => {

   
    getDataWithAuth(`Authrjs/orderlist?from_date=${from}&to_date=${to}`)      .then((response) => {
        setPendingKot(response.data.kot_detail_data);
        let total = 0;
        response.data.kot_detail_data.forEach((item) => {
          total += item.amount;
        });
        setTotalAmount(total);
      })
      .catch((error) => {});
  };

  // Handle search button click with validation
  const handleSearch = () => {
    if (!fromDate || !toDate) {
      // Both dates must be selected
      toast.error("Please select both From Date and To Date.");
      return;
    }

    if (new Date(fromDate) > new Date(toDate)) {
      // From Date should not be later than To Date
      toast.error("From Date cannot be later than To Date.");
      return;
    }

    // If validation passes, fetch the filtered order list
    fetchOrderList(fromDate, toDate);
  };

  return (
    <>
      <div className="student_dashboard_main">
        <h5>KOT HISTORY</h5>
        <table border="0" cellspacing="0" cellpadding="4" width="100%" className="kot_menu">
          <tbody>
            <tr>
              <td width="300">
                <label>From Date</label>
                <input
                  name="from_date"
                  type="date"
                  className="form-control"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </td>
              <td>
                <label>To Date</label>
                <input
                  name="to_date"
                  type="date"
                  className="form-control"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </td>
              <td width="80">
                <label style={{ width: "100%" }}>&nbsp;</label>
                <button className="fxt-btn-fill" onClick={handleSearch} style={{ padding: "10px 10px" }}>
                  Search
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {pendingkot.map((item, index) => (
          <Link to={`/home/OrderDetail/${item.kot_id}`}>
          <div className="payment_kot_list" key={index}>
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
              <tr>
                <td width="50%">{item.student_name}</td>
                <td width="40%">
                  {item.student_id}
                  <br />
                  (Kot. No. KOT{item.kot_id})
                </td>
                <td>
                  <strong>{item.amount}</strong>
                </td>
              </tr>
            </table>
          </div>
          </Link>
        ))}

        {pendingkot.length === 0 ? (
          <Alerts type="info" message="No Data Yet!" />
        ) : (
          <div className="payment_kot_list">
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
              <tr>
                <td width="50%"></td>
                <td width="40%">
                  <strong>Total:</strong>
                </td>
                <td>
                  <strong>{totalamount}</strong>
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>

      <div style={{ width: "100%", height: "70px" }}></div>
    </>
  );
};

export default OrderHistory;

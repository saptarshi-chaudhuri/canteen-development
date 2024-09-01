import { useNavigate } from 'react-router-dom';

const CustomRedirect = (url, type) => {
  const navigate = useNavigate();

  const redirect = (url, type) => {
    if (type === 'self') {
      navigate('/' + url);
    }
  };

  return redirect;
};

export default CustomRedirect;
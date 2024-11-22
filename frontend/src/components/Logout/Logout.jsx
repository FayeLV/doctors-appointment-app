import React from 'react';
import { useAuth } from '../../context/authContext.jsx';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.clear();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center mr-10 justify-items-center rounded-[50px]">Logout</button>
  );
};

export default Logout;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../config';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { dispatch } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError('Please fill in all fields');
      toast.error('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  // API call for authentication
  const loginAPI = async (email, password) => {
    console.log('Sending login data:', { email, password });

    const response = await fetch(`${BASE_URL}auth/login`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Response status:', response.status);

    const responseData = await response.json();
    console.log('Response data:', responseData);

    if (!response.ok) {
      console.error('Error response:', responseData);
      throw new Error(responseData.message || 'Failed to log in'); 
    }

    return responseData;
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    dispatch({ type: 'LOGIN_START' }); 
    try {
      const response = await loginAPI(formData.email, formData.password); 
      console.log('Current form data:', formData);
      
      if (response.status) { 
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: response.data,
            token: response.token,
            role: response.role,
          }
        });
        toast.success('Successfully logged in!');  
        setLoading(false);
        navigate('/home'); 
      } else {
        setError('Invalid email or password');
        setLoading(false);
        dispatch({ type: 'LOGIN_FAILURE' });
      }
    } catch (err) {
      console.error('Login error:', err); 
      setError('Something went wrong. Please try again.');
      toast.error('Something went wrong. Please try again.');
      setLoading(false);
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back
        </h3>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              required
            />
          </div>

          <button
            type="submit"
            className={`btn w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center mt-5">
            <p className="text-gray-700">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primaryColor font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

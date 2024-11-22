

import React, { useState } from 'react';
import signupImg from '../assets/images/signupImg.png';
import { formatDate } from './../utils/formateDate';
import avatar from '../assets/images/avatar-icon.png';
import { BASE_URL } from '../../config';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [loading,setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
    gender: 'female',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password) {
    toast.error('Please fill out all required fields.');
    setLoading(false);
    return;
  }

    try {
      const res = await fetch(`${BASE_URL}auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Failed to register');
      }

      const { message } = await res.json();
      toast.success(message);
      navigate('/home'); 
    } catch (error) {
      if (error.message.includes('404')) {
    toast.error('API endpoint not found. Please check the server configuration.');
  } else {
    toast.error(error.message || 'An unexpected error occurred.');
  }
      
      toast.error(error.message || 'An unexpected error occurred'); 
    } finally {
      setLoading(false);
    }
};

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5">
          

          {/* sign up form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full my-5 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full my-5 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full my-5 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label htmlFor="role" className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select name="role" value={formData.role} onChange={handleChange} className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label htmlFor="gender" className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select name="gender" value={formData.gender} onChange={handleChange} className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="Avatar" className="w-full rounded-full"/>
                </figure>
                <input type="file" name="photo" accept='.jpg,.png' onChange={handleChange} />
              </div>

              <button type="submit" className="btn w-full">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

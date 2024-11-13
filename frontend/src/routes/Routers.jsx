import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Service from '../pages/Service'
import Signup from '../pages/Signup'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'
import {Routes,Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/doctordetails" element={<DoctorDetails/>} />
      <Route path="/doctors" element={<Doctors/>} />
      
    </Routes>
  )
}

export default Routers
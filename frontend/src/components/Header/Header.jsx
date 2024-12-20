import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { useEffect,useRef,useContext} from 'react'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
import { AuthContext } from '../../context/authContext'
import Logout from '../Logout/Logout.jsx'

const navLinks = [
  {path:'/home',display:'Home'},
    {path:'/doctors',display:'Doctors'},
      {path:'/service',display:'Service'},
        {path:'/contact',display:'Contact'},

]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user,role,token} = useContext(AuthContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      }else {
        headerRef.current.classList.remove('sticky_header');
      }
    })
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll",handleStickyHeader);
  },[]);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
   <header className="header flex items-center" ref={headerRef}>
    <div className="container">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">

            {
              navLinks.map((link,index) => (
                <li key={index}>
                  <NavLink to={link.path} className ={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>{link.display}</NavLink>
                </li>
              ))
            }

          </ul>
        </div>

        <div className="flex items-center gap-4">
          {
            
            token && user ? (
              <>
                <Link to={`${role === 'doctor' ? '/doctor/profile/me' : '/users/profile/me'}`}>
                  <div className="flex items-center gap-2">
                    <div className="user-img w-[35px] h-[35px] rounded-full overflow-hidden">
                      <img src={userImg} alt={user.name} className="w-full h-full object-cover" /> 
                    </div>
                    <span>{user.name}</span> 
                  </div>
                </Link>
                <Logout/>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-items-center rounded-[50px]">
                    Login
                  </button>
              </Link>
              </>
            )
          }
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className = "w-6 h-6 cursor-pointer"/>
          </span>
  
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header
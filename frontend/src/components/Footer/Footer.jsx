import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },

  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
]

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/", display: "Blog" },
]

const quickLinks02 = [
  { path: "/find-a-doctor", display: "Find a Doctor" },
  { path: "/", display: "Request an Appointment" },
  { path: "/", display: "Find a Location" },
  { path: "/", display: "Get an Opinion" },
]

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Social Links */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Logo" className="w-20 h-auto mb-4" />
          <p className="text-gray-400 text-sm">
            Providing the best medical services for all.
          </p>
          <div className="flex gap-4 mt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-blue-500 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            {quickLinks01.map((link, index) => (
              <li key={index} className="mb-2">
                <Link to={link.path} className="text-gray-400 hover:text-blue-500 transition-colors">
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul>
            {quickLinks02.map((link, index) => (
              <li key={index} className="mb-2">
                <Link to={link.path} className="text-gray-400 hover:text-blue-500 transition-colors">
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2 text-gray-400 hover:text-blue-500 transition-colors">
              <Link to="/donate">Donate</Link>
            </li>
            <li className="mb-2 text-gray-400 hover:text-blue-500 transition-colors">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

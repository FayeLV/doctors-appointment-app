import React from 'react'
import heroImg04 from  "../assets/images/heroImg04.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from "../components/About/about"
import ServiceList from '../components/Services/ServiceList'
import featureImg from '../assets/images/feature-img.png'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faqs/FaqList'
import fqgImg from '../assets/images/faq-img.png'
import Testimonial from '../components/Testimonial/Testimonial'



const Home = () => {
  return (
    <>
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[80px]">
                We help patients live a healty, longer life.
              </h1>

              <p className="text_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic laborum harum, vero temporibus similique, officia excepturi assumenda, necessitatibus autem itaque quisquam error soluta distinctio velit expedita deleniti ducimus sapiente!
              </p>

              <button className="btn">Request an Anppointment</button>
            </div>

            <div className="mt-[60px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Clinic Location</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
      
        
            </div>

          </div>
                  
          <div className="flex gap-[30px] justify-end">
            <div>
              <img src={heroImg04} alt="" className="rounded-[20px]"/>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      
      <div className="container">
          <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Providing the best medical services</h2>
              <p className="text_para text-center">
                  World-class care for everyone. Our health System offers unmatched expert health care.
              </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="" className="rounded-[20px]"/>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Doctor
              </h2>
              <p className="text_para">
                  World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic
              </p>

              <Link to ="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>

            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="" className="rounded-[20px]"/>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text_para">
               With multiple locations available, receiving expert medical care has never been easier than ever.   </p>

              <Link to ="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>

            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="" className="rounded-[20px]"/>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text_para">
                  World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic
              </p>

              <Link to ="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5"/>
              </Link>

            </div>
          </div>
        </div>
      </div>


    </section>

    <About/>

    <section>
      <div className="container">
        <h2 className="heading text-center">Our medical services</h2>
        <p className="text_para text-center">
          World-class care for everyone. Our health System offers unmatched, expert health care.
        </p>
        <ServiceList/>
      </div>
    </section>

   <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime.
            </h2>

            <ul className="pl-4">
              <li className="text_para">
                1. Schedule the appointment directly.
              </li>
              <li className="text_para">
                2. Search for your physician here, and contact their office.
              </li>
              <li className="text_para">
                3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
              </li>
            </ul>

            <Link to="/">
              <button  className="btn">Learn More</button>
            </Link>
          </div>

          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="" className="rounded-[20px]"/>
          </div>
        </div>
      </div>
  </section>

  <section>
    <div className="container">
      <h2 className="heading text-center">Our Great Doctors</h2>
      <p className="text_para text-center">
        World-class care for everyone. Our health System offers unmatched, expert health care.
      </p>
      <DoctorList/>
    </div>
  </section>

  
  <section>
    <div className="container">

      <div className="flex justify-between items-center gap-[20px] lg:gap-0">
        <div className="w-1/2 hidden md:block">
        <img src={fqgImg} alt="" className="w-full h-auto max-w-[600px] rounded-[20px]" />
        </div>

        <div className="w-full md:w-1/2">
              <h2 className="heading text-center">Most questions by our beloved patients</h2>
              <FaqList/>
        </div>
      </div>

    </div>
  </section>

  <section>
    <div className="container">
          <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What our patient say</h2>
              <p className="text_para text-center">
                  World-class care for everyone. Our health System offers unmatched expert health care.
              </p>
          </div>
          <Testimonial/>
      </div>
  </section>



    </>
  )
}

export default Home
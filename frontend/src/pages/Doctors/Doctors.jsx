import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  return (
    <>
    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="hading">Find a Doctor</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
          </div>
      </div>
    </section>


    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors.map((item,index) => <DoctorCard item={item} key={index.id}/>)}
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

export default Doctors
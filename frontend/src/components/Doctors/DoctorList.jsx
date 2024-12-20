import React from 'react'
import DoctorCard from './DoctorCard'
import {doctors} from "../../assets/data/doctors"

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {doctors.map((item) => <DoctorCard item={item} key={item.id}/>)}
    </div>
  )
}

export default DoctorList
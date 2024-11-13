import React from 'react'
import { formatDate } from './../../utils/formateDate';


const DoctorAbout = () => {
  return (
       <div>
        <div>
            <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                John Smith
            </span>

            <p className="text_para">
                Dr. John Smith is a board-certified surgeon with over 10 years of experience in the medical field. 
                  He specializes in minimally invasive surgical techniques, ensuring faster recovery times and improved outcomes for his patients.
                  Dr. Smith is known for his compassionate approach to patient care and is dedicated to making sure his patients are fully informed 
                  about their treatment options. He has received numerous accolades for his work and continues to strive for excellence in 
                  every procedure he performs.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        {formatDate("12-04-2010")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        PHD in Surgeon
                    </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Methodist Hospital
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout
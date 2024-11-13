import React from 'react'
// import { formatDate } from '../../utils/formateDate'
import avatar from '../../assets/images/avatar-icon.png'

const Feedback = () => {
  return (
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
        All reviews (272)
      </h4>

      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img className="w-full" src={avatar} alt="" />
          </figure>

          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Ali Ahmed
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              {formatDate("02-14-2023")}
            </p>

            <p className="text_para mt-3 font-medium text-[15px]">
                Good services, highly recommend
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'


const ServiceCard = ({item,index}) => {
    //     name: "Labor & Delivery",
    // desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    // bgColor: "rgba(151, 113, 255, .2)",
    // textColor:
    const {name,desc,bgColor,textColor} = item

  return (
    <div className="py-[30px] px-3 lg:px-5">
        <h2 className="text-[26px] leading-9 text-headingColor font-[700]">{name}</h2>
        <p className="text_para">{desc}</p>

        <div className="flex items-center justify-between w-full mt-[30px]">
            <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
            </Link>

            <span
                className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
                style={{
                background: `${bgColor}`,
                color: `${textColor}`,
                borderRadius: "6px 0 0 6px",
                }}
            >
                {String(index + 1)}
            </span>
            </div>

    </div>

    
  )
}

export default ServiceCard
import React from 'react'
import { faqs } from './../../assets/data/faqs';
import FaqCard from './FaqCard';

const FaqList = () => {
  return (
            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                    {faqs.map((item,index) => <FaqCard item={item} key={index}/>)}
            </div>       
        )
}

export default FaqList
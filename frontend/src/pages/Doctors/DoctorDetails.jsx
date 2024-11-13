import React, { useState } from 'react';
import doctorImg from '../../assets/images/doctor-img01.png';
import startIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about');

  const handleTab = (tabName) => {
    setTab(tabName); 
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  John Smith
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={startIcon} alt="" /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">(272)</span>
                </div>
              </div>
            </div>
            <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
              I recently visited Dr. Smith, and I couldn’t be more grateful for the care and attention I received. Dr. Smith is incredibly knowledgeable, patient, and truly listens to any concerns. The time and effort they took to ensure I fully understood my treatment plan and options were very reassuring. The entire experience felt supportive and professional. I highly recommend Dr. Smith to anyone looking for exceptional medical care!
            </p>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'about' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => handleTab('about')}
              >
                About
              </button>
              <button
                className={`py-2 px-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'feedback' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => handleTab('feedback')}
              >
                Feedback
              </button>
            </div>

            {
              tab === 'about' && <DoctorAbout/>
            }

            {
              tab === 'feedback' && <Feedback/>
            }
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;

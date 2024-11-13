import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import avatar from "../../assets/images/avatar-icon.png"
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {/* Testimonial Slide 1 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded shadow-md">
            <div className="flex items-center gap-[13px]">
              <div className="user-img w-[35px] h-[35px] rounded-full overflow-hidden">
                <img src={avatar} alt="Patient Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr. Larry Dougherty
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-ellipsis">
              “I have received exceptional medical services from the team. They treated me with great care and professionalism.”
            </p>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 2 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded shadow-md">
            <div className="flex items-center gap-[13px]">
              <div className="user-img w-[35px] h-[35px] rounded-full overflow-hidden">
                <img src={patientAvatar} alt="Patient Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr. Sarah Johnson
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-ellipsis">
              “The level of care and attention provided by the staff was truly remarkable. I highly recommend their services.”
            </p>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 3 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded shadow-md">
            <div className="flex items-center gap-[13px]">
              <div className="user-img w-[35px] h-[35px] rounded-full overflow-hidden">
                {/* <img src={patientAvatar} alt="Patient Avatar" className="w-full h-full object-cover" /> */}
              </div>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr. John Doe
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-ellipsis">
              “From the moment I walked through the door, I was greeted with warmth and compassion that instantly made me feel at ease. ”
            </p>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 4 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded shadow-md ">
            <div className="flex items-center gap-[13px]">
              <div className="user-img w-[35px] h-[35px] rounded-full overflow-hidden">
                {/* <img src={patientAvatar} alt="Patient Avatar" className="w-full h-full object-cover" /> */}
              </div>
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr. Emily Clark
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-ellipsis">
              “I truly appreciate the compassion and expertise shown by the staff during my time there. Highly recommended!”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import startIcon from '../../assets/images/Star.png';

const buttonClass = 'w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none';
const textClass = 'text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor';

const Rating = ({ avgRating, totalRating }) => (
  <div className="flex items-center gap-[6px]">
    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] font-semibold text-headingColor">
      <img src={startIcon} alt="Star" /> {avgRating}
    </span>
    <span className={textClass}>{totalRating}</span>
  </div>
);

const ServiceCard = ({ item }) => {
  const { name, specialty, avgRating, totalRating, totalPatients, hospital } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <div className="w-full mx-auto p-3 lg:p-5">
        <div className="doctor_pic w-full h-[400px] flex justify-center overflow-hidden rounded-lg">
          {/* Image or other content could go here */}
        </div>

        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-4">{name}</h2>

        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
            {specialty}
          </span>
          <Rating avgRating={avgRating} totalRating={totalRating} />
        </div>

        <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
              {totalPatients} patients
            </h3>
            <p className={textClass}>At {hospital}</p>
          </div>

          <Link to="/doctors" className={buttonClass}>
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

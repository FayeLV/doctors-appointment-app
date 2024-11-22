import aboutImg01 from '../../assets/images/aboutImg01.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-5" >
          {/* Left Side - Image */}
          <div className="w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg01} alt="" className="rounded-[20px]" />
          </div>

          {/* Right Side - About Content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              For over 30 consecutive years, U.S. News & World Report has consistently recognized us as one of the premier public hospitals in the nation and the top hospital in Texas.            </p>
            <p className="text_para">
              Every day, we strive for excellence in caring for our patients—not merely reflecting on our past achievements, but focusing on the contributions we can make for the future. We are committed to delivering the highest standard of care, ensuring that every patient receives the attention they deserve.
            </p>

            <Link>
                <button className="btn">Learn More</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

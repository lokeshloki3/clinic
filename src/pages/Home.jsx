import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import reviews from "../assets/testimonialsData";
import FeatureTable from "../components/FeatureTable";
import { assets } from "../assets/assets";
// import ImageSection from "../components/ImageSection";

const Home = ({ setIsModalOpen }) => {
  return (
    <div>
      <h1 className="text-center m-8 text-3xl mt-24 font-medium md:text-5xl">Welcome to Cortihear</h1>
      <Header />
      <SpecialityMenu />
      <FeatureTable />

      {/* Button to open the appointment modal */}
      <div className="flex justify-center mb-8 md:mb-28 md:mt-20">
        <button 
          onClick={() => setIsModalOpen(true)}  // Open modal when clicked
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">
          Click to book your online appointment
        </button>
      </div>

      <div className="flex justify-center mb-8 md:mb-28 md:mt-20 ">
        <img
          className="w-full h-auto p-3 md:p-4 rounded-3xl"
          style={{ backgroundColor: '#F1FEC4' }}
          src={assets.book}
          alt="Book"
        />
      </div>

      {/* Button to open the appointment modal */}
      <div className="flex justify-center mb-8 md:mb-28 md:mt-20">
        <button 
          onClick={() => setIsModalOpen(true)}  // Open modal when clicked
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">
          Click to book your online appointment
        </button>
      </div>      

      {/* Second Image */}
      <div className="flex justify-center mb-8 md:mb-28">
        <img
          className="w-full h-auto p-4 rounded-3xl"
          style={{ backgroundColor: '#F1FEC4' }}
          src={assets.whycorti}
          alt="Book"
        />
      </div>

      {/* Button to open the appointment modal */}
      <div className="flex justify-center mb-8 md:mb-28 md:mt-20">
        <button 
          onClick={() => setIsModalOpen(true)}  // Open modal when clicked
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">
          Click to book your online appointment
        </button>
      </div>       

      {/* <ImageSection src={assets.book} alt="Book" />
      <ImageSection src={assets.whycorti} alt="Why Cortihear" /> */}

      <Testimonials reviews={reviews}/>
    </div>
  );
};

export default Home;
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import reviews from "../assets/testimonialsData";
import FeatureTable from "../components/FeatureTable";
import { assets } from "../assets/assets";
import ActionButton from "../components/ActionButton";
import ImageSection from "../components/ImageSection";

const Home = ({ setIsModalOpen }) => {
  return (
    <div>
      <h1 className="text-center mt-16 mb-8 text-3xl md:text-4xl pt-10 text-gray-800">
        <strong className="font-bold">
          Welcome to <span className="text-primary">Cortihear</span>
        </strong>
      </h1>   
      {/* Passing down setIsModalOpen */}
      <Header setIsModalOpen={setIsModalOpen}/>
      <SpecialityMenu />

      {/* Button to open the appointment modal */}
      <ActionButton 
        onClick={() => setIsModalOpen(true)} 
        label="Click to book your online appointment" 
      />
      
      <FeatureTable />

      {/* Button to open the appointment modal */}
      <ActionButton 
        onClick={() => setIsModalOpen(true)} 
        label="Click to book your online appointment" 
      />

      {/* Image Section 1 */}
      <ImageSection src={assets.book} alt="Book" />
      
      {/* Image Section 2 */}
      <ImageSection src={assets.whycorti} alt="Why Cortihear" />

      {/* Button to open the appointment modal */}
      <ActionButton 
        onClick={() => setIsModalOpen(true)} 
        label="Click to book your online appointment" 
      />

      <Testimonials reviews={reviews}/>
    </div>
  );
};

export default Home;
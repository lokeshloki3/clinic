import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import reviews from "../assets/testimonialsData";
import FeatureTable from "../components/FeatureTable";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div>
      <h1 className="text-center m-8 text-3xl mt-24 font-medium md:text-5xl">Welcome to Cortihear</h1>
      <Header />
      <SpecialityMenu />
      <FeatureTable />

      <div className="flex justify-center mb-8 md:mb-28 md:mt-20 ">
        <img
          className="w-full h-auto p-4 rounded-3xl"
          style={{ backgroundColor: '#F1FEC4' }}
          src={assets.book}
          alt="Book"
        />
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

      <Testimonials reviews={reviews}/>
    </div>
  );
};

export default Home;
import SeaLaVie from "./components/SeaLaVie";
import CheckAvailability from "./components/CheckAvailability";
import RatingsReviews from "./components/RatingsReviews";
import About from "./components/About";
import RealMoments from "./components/RealMoments";
import Location from "./components/Location";
import RoomBed from "./components/RoomBed";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <SeaLaVie />
      <div className="bg-black min-h-screen pb-[80.5px] md:pb-0">
        <div className="w-full relative max-w-[1440px] mx-auto">
          <RatingsReviews />
          <About />
          <RealMoments />
          <Location />
          <RoomBed />
          
          <CheckAvailability />
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

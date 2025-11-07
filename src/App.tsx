import SeaLaVie from "./components/SeaLaVie";
import CheckAvailability from "./components/CheckAvailability";
import RatingsReviews from "./components/RatingsReviews";
import About from "./components/About";
import RealMoments from "./components/RealMoments";
import Location from "./components/Location";
import RoomBed from "./components/RoomBed";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
        
    <SeaLaVie />
    
    <div className="bg-black w-full min-h-screen text-white ">
      <div className="container mx-auto w-full">
      <CheckAvailability /> 
     <RatingsReviews />
    <About />
     <RealMoments /> 
    <Location />
    <RoomBed />
     
    </div>
     <Footer /> 
    </div>
    </>
)
}

export default App;
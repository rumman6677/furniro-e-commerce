import { GoArrowRight } from "react-icons/go";
import image11 from '../../assets/Rectangle 25.png'
import image12 from '../../assets/Rectangle 24.png'

const BeautifulRooms = () => {
    return (
        <div className="relative w-[1440px] h-[670px] bg-[#FBF6F0] mt-14 p-10 my-14">
        <div className="container mx-auto flex items-center space-x-8">
          {/* Left Section */}
          <div className="relative w-1/3">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-gray-600 mt-4">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="mt-6 font-semibold text-sm px-4 py-3 w-[176px] h-[48px] bg-[#B88E2F] text-white rounded-md ">
              Explore More
            </button>
             </div>
   
          {/* Middle Section */}
          <div className="w-1/3 relative">
            <img
              src={image12} // Replace with room image
              alt="Room"
              className="w-[404px] h-[582px] object-cover rounded-lg bg-white opacity-70 shadow-md"
            />
            <div className="absolute w-[210px] h-[120px] bottom-11 left-6 bg-white p-6 shadow-md ">
              <p className="text-[16px] font-[500px] text-gray-500">01 — Bed Room</p>
              <h2 className="text-[28px] font-semibold text-gray-800">Inner Peace</h2>
              
            </div>
            {/* <div>
            <button className="mt-2 text-yellow-600 bg-[#B88E2F] w-[48px] h-[48px] flex items-center">
                <span> <GoArrowRight></GoArrowRight> </span>
            </button>
            </div> */}
          </div>

  
          {/* Right Section */}
          <div className="w-1/3 relative">
            <img
              src={image11} 
              alt="Room"
              className="w-[372px] h-[486px] object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <button className="text-gray-800 text-xl">{">"}</button>
            </div>
          </div>
        </div>
  
        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2 absolute left-[1130px] bottom-14">
          <button className="w-4 h-4 bg-yellow-600 rounded-full"></button>
          <button className="w-4 h-4 bg-gray-300 rounded-full"></button>
          <button className="w-4 h-4 bg-gray-300 rounded-full"></button>
        </div>



          {/* left arrow */}
          <div>
            <button className="mt-2 text-white absolute  bottom-24 left-[738px]
             bg-[#B88E2F] w-[48px] h-[48px] flex items-center mx-auto">
                <span className="text-3xl p-2"> <GoArrowRight></GoArrowRight> </span>
            </button>
            </div>

      </div>

      
    );
  };

export default BeautifulRooms;
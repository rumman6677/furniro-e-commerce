import banner1 from '../../assets/banner.png'

import React from 'react';

const Navbar = () => {
    return (
         <nav className="bg-gray-100 flex items-center justify-center mt-5">

  
        <div className="relative w-[380px] md:w-[1440px]  bg-white shadow-lg overflow-hidden">
  
      
        <div className="relative ">
        <img 
          src={banner1} 
          alt="Background" 
          class=" md:w-full   md:h-[750px] object-cover"/>
  
        
        <div className="absolute transform hidden w-[634px] lg:block md:h-[443px]  md:top-[200px] md:left-[740px] rounded-lg  md:p-[62px] bg-[#FFF3E3]">
          <p class="text-[20px] tracking-[5px] font-semibold  text-black  mb-2">New Arrival</p>
          <h1 className="text-6xl font-bold text-[#be932f] mb-4 w-[560px] h-[127px]">Discover Our  <br /> New Collection</h1>
          <p className="text-black text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#b98e2b] text-white text-xl font-semibold py-2 px-4 rounded 
          w-[222px] h-[74px] hover:bg-yellow-600">
            Buy Now
          </button>
        </div>
      </div>
  
    </div>
  
  </nav>

  

    );
};

export default Navbar;

{/* <nav class="bg-gray-100 flex items-center justify-center min-h-screen">

  
<div class="relative w-[1440px]  bg-white shadow-lg overflow-hidden">


<div class="relative">
<img 
  src="https://i.ibb.co.com/85RhT99/scandinavian-interior-mockup-wall-decal-background-1.png" 
  alt="Background" 
  class="w-full h-[750px] object-cover"/>


<div class="absolute transform 
w-[643px] h-[443px]  top-[200px] left-[740px] rounded-lg  p-[62px] bg-[#FFF3E3]">
  <p class="text-[20px] tracking-[5px] font-semibold  text-black  mb-2">New Arrival</p>
  <h1 class="text-6xl font-bold text-[#be932f] mb-4 w-[560px] h-[127px]">Discover Our <br> 
    New Collection</h1>
  <p class="text-black text-lg mb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
  </p>
  <button class="bg-[#b98e2b] text-white text-xl font-semibold py-2 px-4 rounded 
  w-[222px] h-[74px] hover:bg-yellow-600">
    Buy Now
  </button>
</div>
</div>

</div>

</nav> */}
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import ShowMoreExample from "../ShowMoreExample/ShowMoreExample";
import grp106 from '../../assets/Group 106.png'
import grp107 from '../../assets/Group 107.png'
import { MdOutlineStar } from "react-icons/md";
import { LiaStarHalf } from "react-icons/lia";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import smlpic1 from '../../assets/Outdoor sofa set 2.png'
import smlpic2 from '../../assets/Group 97.png'
import smlpic3 from '../../assets/Maya sofa three seater (1) 1.png'
import sofa1 from '../../assets/Asgaard sofa 3.png'



const NewCard = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('ShowMore.json')
        .then(res => res.json())
        .then (data => setCards(data));
    },[])

    return (
        <div className="w-[1440px]  mx-auto">
            
                      {/* nav */}
        <div className="w-[1440px] h-[85px] bg-[#F9F1E7] flex p-7 gap-2">
          <p className="text-[#9F9F9F] text-[16px] font-normal">Home</p> 
          <p className="text-black text-[16px] font-normal">&gt;</p> 
          <p className="text-[#9F9F9F] text-[16px] font-normal">Shop</p>


          </div>

          <div className='flex mt-10 gap-10'>
            {/* img part */}
            <div className='flex w-[690px] justify-center gap-8'>
              {/* small */}
              <div className=''>
                <img className='w-[76px] h-[80px] bg-[#D9D9D9]' src={smlpic1} alt="" />
                
                <img className='w-[76px] h-[80px] bg-[#D9D9D9] mt-10' src={smlpic3} alt="" />
                <img className='w-[76px] h-[80px] bg-[#D9D9D9] mt-10' src={smlpic1} alt="" />
                <img className='w-[76px] h-[80px] bg-[#D9D9D9] mt-10' src={smlpic3} alt="" />
              </div>

              <div>
                <img className='w-[423px] h-[500px] bg-[#D9D9D9]' src={sofa1} alt="" />
              </div>


            </div>

            {/* details part */}
            <div className=' w-[740px] justify-center'>
              <h3 className='font-normal text-[40px] text-black '>Asgaard sofa</h3>
              <p className='font-medium text-[24px] text-[#9F9F9F]'>Rs. 250,000.00</p>
              <div className='flex mt-1'>
                <div className='mt-1'>
                  <p className='text-[#FFC700] flex'><MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /><LiaStarHalf /></p>
                </div>
                <div>
                  <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                </div>
                <div>
                  <p className='text-[#9F9F9F] text-[13px] font-normal'>5 Customer Review</p>
                </div></div>
                <p className='text-black text-[13px] font-normal mt-3'>Setting the bar as one of the <br /> loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a bbr
                <br /> sound.</p>

                <div className='mt-5'>
                 <p className='text-[14px] font-normal mt-3'>Size</p>

                 <div className='flex mt-2'>
                 <div className='w-[30px] h-[30px] bg-[#B88E2F]  text-center'>
                  <p className='text-white'>L</p>
                 </div>
                 <div className='w-[30px] h-[30px] bg-[#B88E2F]  text-center ml-2'>
                  <p className='text-white'>XL</p>
                 </div>
                 <div className='w-[30px] h-[30px] bg-[#B88E2F]  text-center ml-2'>
                  <p className='text-white'>XS</p>
                 </div>
                 </div>

                </div>

                <div className='mt-5'>
                <p className='text-[14px] font-normal mt-3'>Color</p>
                <div className='flex mt-2'>
                  <div className='bg-[#816DFA] w-[30px] h-[30px] rounded-full'></div>
                  <div className='bg-black w-[30px] h-[30px] rounded-full ml-2'></div>
                  <div className='bg-[#B88E2F] w-[30px] h-[30px] rounded-full ml-2'></div>
                </div>
                </div>

         <div className='flex gap-4 mt-5'>


          <div class="flex w-[123px] h-[64px] items-center border rounded-md overflow-hidden">
            <button class="px-4 py-2  text-lg hover:bg-gray-200">-</button>
            <p className='w-12 text-center text-lg border-l border-r'>1</p>
            <button class="px-4 py-2  text-lg hover:bg-gray-200">+</button>
        </div>

        <div>
        <button class="px-6 py-2 w-[225px] h-[64px] border rounded-md text-lg hover:bg-gray-100">
            Add To Cart
        </button>
        </div>

        <div>
        <button class="px-6 py-2 border w-[225px] h-[64px] rounded-md text-lg hover:bg-gray-100">
            + Compare
        </button>
        </div>
           </div>

           {/* <!-- Product Details Section --> */}
    <div class="border-t pt-4">
        
        <div class="flex gap-20 text-gray-600 mb-2">
            <span>SKU  :</span>
            <span> SS001</span>
        </div>

        
        <div class="flex gap-10 text-gray-600 mb-2">
            <span>Category  :</span>
            <span> Sofas</span>
        </div>

       
        <div class="flex gap-16 text-gray-600 mb-2">
            <span>Tags  :</span>
            <span> Sofa, Chair, Home, Shop</span>
        </div>

        
        <div class="flex gap-14 items-center text-gray-600">
            <span>Share  :</span>
            <div class="flex items-center gap-4 text-xl">
                <a><TiSocialFacebookCircular /></a>
                <a><IoLogoLinkedin /></a>
                <a ><FaTwitter /></a>
            </div>
        </div>
    </div>

                </div>

                
          </div>

                  {/* react tab section */}
    <div className=" ml-44 w-[1126px] justify-center mt-10">
    
     <Tabs >
    <TabList className="flex gap-14 justify-center py-10">
      <Tab className="text-2xl font-medium text-black hover:bl">Description</Tab>
      <Tab className="text-2xl font-normal text-[#9F9F9F]">Additional Information</Tab>
      <Tab className="text-2xl font-normal text-[#9F9F9F]">Reviews [5]</Tab>
    </TabList>
    <TabPanel className="text-[16px] font-normal text-[#9F9F9F]">
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. <br /> <br />
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </TabPanel>
    <TabPanel className="text-[16px] font-normal text-[#9F9F9F]">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        <br /> <br />
        <h2>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. <br /> <br />

      </h2>
    </TabPanel>
    <TabPanel className="text-[16px] font-normal text-[#9F9F9F]">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        <br /> <br />
        <h2>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. <br /> <br />

      </h2>
    </TabPanel>
  </Tabs> 

        </div>

        <div className='flex justify-center gap-5 mt-5 items-center'>
          <img className='w-[605px] h-[348px]' src={grp106} alt="" />
          <img className='w-[605px] h-[348px] ml-5' src={grp107} alt="" />
        </div>

          {/* card section */}
  <div >

      <div>
      <h1 className='font-medium text-4xl text-black text-center mt-11 my-4'>Related Products</h1>
      </div>
  <div className=" w-[1300px] mx-auto   grid grid-cols-4">
  
                {
                    cards.map(card => <ShowMoreExample key={card.id} 
                        card={card}></ShowMoreExample>)
                }
                </div>
                <div className=" w-[270px] mx-auto text-center">
         <button onClick="showMoreCards()" className="w-[245px] h-[48px] bg-[#FFFFFF] border
         border-[#B88E2F] flex items-center justify-center my-8
         rounded text-center">Show More</button>
         </div>
  </div>
        </div>
    );
};

export default NewCard;
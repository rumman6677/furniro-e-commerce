import { TiLocation } from "react-icons/ti";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="w-[1440px]">
            <div className="py-10">
                <img src="/src/assets/Rectangle 1.png" alt="" />
                <img className="" src="/src/assets/Group 63.png" alt="" />
                
            </div>
            <div className="absolute top-[200px] left-[660px] "> 
            <div className="ml-12" >
            <img className="" src="/src/assets/Meubel House_Logos-05.png" alt="" />
            </div>
            <h2 className=" font-[500] text-[42px]">Contact</h2>

            <p className="ml-4"><span className="font-[500] text-[16px] ">Home </span> 
            &gt; 
            <span className="font-[300] text-[16px] ">Contact</span> </p>
            </div>

         
         <div className="w-[1440px] h-[1144px] mt-14 ">
            
                <h2 className="font-semibold text-4xl text-black text-center py-4">Get In Touch With Us</h2>
                <p className="text-base font-normal text-[#9F9F9F] text-center mb-10">For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
                 An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            
            <div className="flex ">
            <div className="w-[400px] h-[537px]  mx-auto p-16 mr-14">
                {/* 1 */}
            <div className="flex py-10 gap-6">
            <div className="text-2xl"><TiLocation></TiLocation></div>
            <div>
                <h2 className="text-2xl font-medium">Address</h2>
                 <p className="text-[16px] font-normal">236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                </div>
            </div>
                {/* 2 */}
            <div className="flex gap-6">
            <div className="text-2xl"><PiPhoneCallFill></PiPhoneCallFill></div>
            <div>
            <h2 className="text-2xl font-medium">Working Time</h2>
            <p className="text-[16px] font-normal">Mobile: +(84) 546-6789
             <br /> Hotline: +(84) 456-6789</p>
                </div>
            </div>
                {/* 3 */}
            <div className="flex py-10 gap-6">
            <div className="text-2xl"><IoTime></IoTime></div>
            <div>
            <h2 className="text-2xl font-medium">Phone</h2>
            <p className="text-[16px] font-normal">Monday-Friday: 9:00 - 22:00
             <br /> 
            Saturday-Sunday: 9:00 - 21:00</p></div>
            </div>

            </div>

            <div className="w-[635px] h-[923px] p-14  mx-auto ml-14">

            {/* 1 */}
            <div className="py-4">
                    <p className="text-base font-medium text-black py-4 ">Your name</p>
                    <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent  w-[528px] h-[75px] " />
                </div>
            {/* 2 */}
            <div className="py-4">
                    <p className="text-base py-4 font-medium text-black">Email address</p>
                    <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent  w-[528px] h-[75px] " />
                </div>
            {/* 3 */}
            <div className="py-4">
                    <p className="text-base font-medium py-4 text-black">Subject</p>
                    <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent  w-[528px] h-[75px] " />
                </div>
            {/* 4 */}
            <div className="py-4">
                    <p className="text-base py-4 font-medium text-black">Message</p>
                    <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent  w-[527px] h-[120px] " />
                </div>

              <div className="py-6">
              <button className="w-[237px] h-[55px] rounded-xl text-[16px] font-[400px] text-white bg-[#B88E2F] ">Submit</button>
              </div>



            </div>
            </div>


         </div>

         <div className="w-[1440px] h-[190px] bg-[#FAF3EA] justify-between flex p-16">
                {/* 1 */}
                <div className="flex gap-3">
                    <div>
                        <img src="/src/assets/Vector (1).png" alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl">High Quality</h2>
                        <p className="font-normal crafted from top materials ">crafted from top materials</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex gap-3">
                    <div>
                        <img src="/src/assets/Vector (2).png" alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl">Warranty Protection</h2>
                        <p className="font-normal crafted from top materials ">Over 2 years</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex gap-3">
                    <div>
                        <img src="/src/assets/Vector (3).png" alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl">Free Shipping</h2>
                        <p className="font-normal crafted from top materials ">Order over 150 $</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="flex gap-3">
                    <div>
                        <img src="/src/assets/Vector (4).png" alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl">24 / 7 Support</h2>
                        <p className="font-normal crafted from top materials ">Dedicated support</p>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Contact;
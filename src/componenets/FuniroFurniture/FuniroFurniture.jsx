import image1 from '../../assets/Rectangle 36.png'
import image2 from '../../assets/Rectangle 38.png'
import image3 from '../../assets/Rectangle 37.png'
import image4 from '../../assets/Rectangle 39.png'
import image5 from '../../assets/Rectangle 40.png'
import image8 from '../../assets/Rectangle 41.png'
import image9 from '../../assets/Rectangle 44.png'
import image43 from '../../assets/Rectangle 43.png'
import image45 from '../../assets/Rectangle 45.png'

const FuniroFurniture = () => {
    return (
        <div>

        <div className="mr-12">
        <p className="text-[#616161] text-[20px] font-medium text-center">Share your setup with</p>
        <h2 className="font-bold text-[40px] text-black text-center ">#FuniroFurniture</h2>
        </div>

      <div className="flex ml-3  ">
      <div className="w-[545px] ">
        <div className="flex">
            <img className="h-[382px] " src={image1} alt="" />
            <div className="mt-16">
            <img className="w-[451px] h-[318px]" src={image2} alt="" />
            </div>
        </div>
        <div className="flex mt-4">
            
            <img src={image3} alt="" />
            
            <img className="w-[344px] h-[220px]" src={image4} alt="" />
        </div>
        </div>

        {/* middle */}

        <div className="w-[310px] py-36">
            <img className="w-[295px]" src={image5} alt="" />
        </div>
        {/* middle */}

        <div className="w-[565px] ">
        <div className="flex h-[346px]">
        
            <img className='mt-16 w-[290px] h-[352px] mb-5'  src={image43} alt="" />

            <img className='h-[416px]' src={image45} alt="" />
            
        </div>
        <div className="flex mt-6 ">
            <img className="w-[178px] h-[242px] my-16" src={image8} alt="" />
            <img className="w-[258px] h-[196px] my-16" src={image9} alt="" />
        </div>

        </div>
      </div>


        </div>
    );
};

export default FuniroFurniture;
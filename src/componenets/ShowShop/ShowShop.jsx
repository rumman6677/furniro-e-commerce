import { Link, Navigate, NavLink } from "react-router-dom";


const ShowShop = ({shop}) => {

    const {image, title, description, price} = shop;


    return (
        <div className="  p-5" >
            <img className="w-[285px] h-[300px]" src={image} alt="" />
            <div className="bg-[#F4F5F7] w-[285px] h-[110px] p-2">
            <h2 className="font-bold text-[24px]">{title}</h2>
            <p className="text-[16px] font">{description}</p>
            <h2 className="font-bold text-[20px] ">Rp {price}</h2>
            </div>

        <Link to='/newCard'>
        <button className="w-[285px] h-[45px] font-medium bg-red-200">Add To Details</button>
        </Link>
            
           </div>
    );
};

export default ShowShop;
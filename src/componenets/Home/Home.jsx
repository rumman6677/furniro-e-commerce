import BeautifulRooms from "../BeautifulRooms/BeautifulRooms";
import BrowseRange from "../BrowseRange/BrowseRange";
import FuniroFurniture from "../FuniroFurniture/FuniroFurniture";
import Navbar from "../Navbar/Navbar";
import OurProduct from "../OurProduct/OurProduct";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BrowseRange></BrowseRange>
            <OurProduct></OurProduct>
            <BeautifulRooms></BeautifulRooms>
            <FuniroFurniture></FuniroFurniture>
            
            
        </div>
    );
};

export default Home;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import ShowMoreExample from "../ShowMoreExample/ShowMoreExample";


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

                  {/* react tab section */}
    <div className=" ml-44 w-[1126px] justify-center">
    
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
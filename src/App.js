
import './App.css';
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import Detail from './Pages/Detail/Detail';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import data from './data';
import orderitem from './ordertiem';
import { useState } from 'react';
import quandity from './quandity';

function App() {

  const item =[ 
{
  id:"1",
  item:"https://www.sbgtrends.com/wp-content/uploads/2018/04/51aIxM8tSoL.jpg",
  Itemname:'Sony MDR-ZX110A',
  description:"Experience great sound quality with these light weight and foldable headphones. Its unique inside-folding design makes it easy to pack and carry, and its long 1.2m cord lets you listen on the go without worries.",
  price:"₹ 799.00",
  mrp:"₹1200.00",
  df:"Frequency response 40Hz - 20kHz",
  second:"Charging time 2.5 hrs",
  dt:"Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity",
  q:1,
  fav:false
 },


{
   id:"2",
   item:"https://images-na.ssl-images-amazon.com/images/I/41arKiUCFQL.jpg",
   Itemname:'Raptech',
   description:"Tailor made for electronic dance music lovers. The enhanced Extra Bass technology enables you to enjoy the intensity of deep bass notes in a variety of locations and scenarios, just like being at an actual club or live festival. ",
   price:"₹ 315.00",
   mrp:"₹700.00",
   df:"Frequency response 40Hz - 20kHz",
   second:"Charging time 2.5 hrs",
   dt:"Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity",
   q:1,
   fav:false
  },
{
   id:"3",
   item:"https://rukminim1.flixcart.com/image/400/400/k4x2du80/headphone/v/t/h/nine9-bluetooth-headphone-with-fm-sd-card-original-imafnp76agfemjgs.jpeg?q=90",
   Itemname:'FPX Trip Go 40 Mm',
   description:"Premium Sound Deliverance -HD sound quality along with treble balance makes it an ideal product for professionals as well as the music lovers .",
   price:"₹ 699.00",
   mrp:"₹1000.00",
   df:"Frequency response 40Hz - 20kHz",
   second:"Charging time 2.5 hrs",
   dt:"Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity",
   q:1,
   fav:false
  },
{
   id:"4",
   item:"https://images-na.ssl-images-amazon.com/images/I/61KVoF5IYxL._SL1500_.jpg",
   Itemname:'BboAt Rockerz 450',
   description:"re you looking for a headset that features eye-catching aesthetics and dual modes? If yes, bring home the boAt Rockerz 450 that has an AUX-mode as well as the Bluetooth connectivity feature.",
   price:"₹ 1,199.00",
   mrp:"₹1500.00",
   df:"Frequency response 40Hz - 20kHz",
   second:"Charging time 2.5 hrs",
   dt:"Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity",
   q:1,
   fav:false
   
  },
  {
    id:"5",
    item:"https://rukminim1.flixcart.com/image/416/416/k76ihe80/headphone/z/5/j/zebronics-zeb-paradise-original-imafphy4g9ft2rcc.jpeg?q=70",
    Itemname:'Zebronics',
    description:"omfortable Design: Beat the workday blues with music on Zeb-Thunder wireless headphone that comes in an ergonomic design a perfect fit and design for long hours use. ",
    price:"₹ 699.00",
    mrp:"₹1500.00",
    df:"Frequency response 40Hz - 20kHz",
    second:"Charging time 2.5 hrs",
    dt:"Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity",
    q:1,
    fav:false
},
{
  id:"6",
  item:"https://static.bhphoto.com/images/images500x500/logitech_981_000882_g733_lightspeed_wireless_rgb_1598435420_1590052.jpg",
  Itemname:'Logitech G G733',
  description:"Immerse yourself in your music, movies, and games with the white G733 LIGHTSPEED Wireless RGB Gaming Headset from Logitech.",
  price:"₹ 9,696.00",
  mrp:"₹10,500.00",
  df:"Frequency response 40Hz - 20kHz",
  second:"Charging time 2.5 hrs",
  dt:"Tap into instant wireless connectivity with optimum Bluetooth V4.2 connectivity",
  q:1,
  fav:false
 },

];


const[quanditys,setQuanditys]=useState(0);
const [orderitems,setOrderitems]=useState([]);
console.log(quanditys);
let [sum]= useState(0);

const store={
  item:item,
}

  return (
    <BrowserRouter>
      <div className="App">
        <data.Provider value={store} >
          <orderitem.Provider value={orderitems}>
            <quandity.Provider value={quanditys}>
            <Switch >
                <Route path="/" exact component={Home}/>
                 <Route path="/order" exact component={Order}/>
                <Route path="/detail/:id"  component={Detail}/>
            </Switch>
            </quandity.Provider>
          </orderitem.Provider>   
        </data.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

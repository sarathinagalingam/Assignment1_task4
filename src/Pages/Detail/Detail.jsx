import React,{useContext}from "react";
import { useState,useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./Details.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Link,useParams } from "react-router-dom";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { AiOutlineHeart } from 'react-icons/ai';
import {MdKeyboardArrowRight} from "react-icons/md";
import data from '../../data';
import orderitem from "../../ordertiem";
//import { useEffect } from "react";

const Detail =()=>{

  const value =useContext(data);
  const arrayval =useContext(orderitem);
  // console.log(arrayval)
  
  const {id} =  useParams();
 
  const [product]=useState(value.item);
  const [colour, setColour] = useState(false);
  //const [orderitem]=useState(value.orderdetail)
  
  
  
     
  const filter_data =(e)=>{
    if(arrayval.indexOf(e)===-1){
      console.log(arrayval.push(e))
      // console.log(arrayval);
    };
  }     
      
   
  // useEffect(() => {
  //   if (colour.value === true) {
  //     console.log(colour);
  //   }
  // }, [colour]);

 const filterdata=product.filter((product)=>{
     if(product.id===id){
     return product;
     }
     
  }
 ).map((pro,index)=>(
  <div className="detail flex flex-col justify-between"  key={index} >
       <span className="detailicon py-2"><span className="backicon"><Link to="/"><BiArrowBack/> </Link></span></span>
        <div className="Itemname ml-4" key={index}>{pro.Itemname}</div>
        <span className="imagesize aspect-w-2 aspect-w-3 overflow-hidden">
          <TransformWrapper>
            <TransformComponent>
              <img className="text-center" key={index} src={pro.item}></img>
            </TransformComponent>
          </TransformWrapper></span>
        <span>
          <div  key={index} class="card rounded-lg self-end flex flex-col">
               <div class=" flex flex-row justify-between ">
                 <ul class="mrphead my-2 pt-2">MRP:<del class="mrp">{pro.mrp}</del></ul>
                 <ul><AiOutlineHeart class="heart"
                    onClick={()=>setColour(!colour)}
                    style={{ color: colour ? 'red' : 'black' }}/></ul>
                </div>
                <div class="dot"><span ><MdKeyboardArrowRight class="mt-1"/></span><span class="text-sm ">{pro.df}</span></div>
                <div class="dot"><span ><MdKeyboardArrowRight class="mt-1"/></span><span class="text-sm ">{pro.second}</span></div>
                <div class="dot"><span ><MdKeyboardArrowRight class="mt-1"/></span><span class="text-sm ">{pro.dt}</span></div>
                
          </div>
              
       </span>
       <span className="text-center "><button onClick={()=>filter_data(pro.id)}><Link to="/order"><p class="orderclick px-5 py-1 rounded-lg">Add to Cart:<span class="priceok">{pro.price}</span>
        {/* <span class="relative bottom-0.3"><span><KeyboardArrowRightIcon/></span><span class="relative right-3"><KeyboardArrowRightIcon/></span><span class="relative right-6"><KeyboardArrowRightIcon/></span></span> */}
              </p></Link></button></span>
</div>
 ))
    

    
    return(
      <span>{filterdata}</span>
    )
}

export default Detail;
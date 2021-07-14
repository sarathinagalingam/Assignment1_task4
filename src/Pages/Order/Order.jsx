import React,{useContext,useState} from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link,useParams,useHistory} from "react-router-dom";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import data from '../../data';
import orderitem from "../../ordertiem";
import quandity from"../../quandity";
import "./order.css";
import { useEffect } from "react";


const Order =()=>{

  const value =useContext(data);
  const [product,setProduct]=useState(value.item);
  const arrayvl=useContext(orderitem);
  const quanditys=useContext(quandity);
  const [arrayval,setArrival]=useState(arrayvl);
  const [qvalue]=useState(quanditys);
  const history =useHistory();
  const [amount,setAmount]=useState([]);
  let [sum,setSum] = useState(0);
  // const [sum1,setSum]=useState(0);
  // console.log(amount);
  console.log(qvalue);


  
  //const [count,setCount]=useState([value.item.q])
  // console.log(arrayval);

  //console.log(filterarray);
  function removeA(arr) {
    var what, a = arguments, L = a.length, ax;      
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    
  }

  // useEffect(() => {
  //   product.filter((product)=>{
  //     // console.log(product);
  //   for(let i=0;i<arrayval.length;i++){
  //     if(product.id===arrayval[i]){
        
  //       return product;
  //       }}
  //   }).map((product,index)=>(
  //     <div class="orderitem">
  //       <div class="prodectcard m-3">
  //         <span class="orderdesign">
  //            <div><img class="orderimage" src={product.item}></img></div>
  //            <div class="flex flex-col"><span>{product.Itemname}</span><span class="pricecolour">{product.price}</span><span class="relative top-5">
  //                <button onClick={()=>DecreaseQuantitly(product.id)} class="bg-gray-200 hover:bg-red-300 mr-2 rounded-md "><KeyboardArrowLeftIcon/></button>{product.q}
  //                <button class="bg-gray-200 hover:bg-red-300 ml-2 rounded-md" onClick={()=>IncreaseQuality(product.id)}><KeyboardArrowRightIcon/></button>
  //              </span></div>
  //            <div class="delete"><button class="m-2" onClick={()=>filter_data(product.id)}><DeleteOutlinedIcon/></button></div>
  //         </span>
  //         </div>
  //   </div>
  //   ))
    
  // },
  // [arrayval]);

 
  function filter_data(e){
   for(let i=0;i<arrayval.length;i++){
    if(arrayval[i]===e){
      setArrival(removeA(arrayval,e));
      console.log(arrayval);
    }
    }
    console.log(arrayval);
  }

  const sarathi=()=>product.filter((product)=>{
    for(let i=0;i<arrayvl.length;i++){
      
      if(product.id===arrayvl[i]){
        
        // console.log(product.q);
        sum+=product.q;

      }
    
     }
     console.log("Sum "+sum);
    //  setSum(sum);
  }
  )
  
  
 
function IncreaseQuality(e){

  const newItems = [...product];
  for(let i=0;i<newItems.length;i++){
    if(newItems[i].id===e){
      newItems[i].q++;
  //    console.log(newItems);
      setProduct(newItems);
    }
  }
}

function DecreaseQuantitly(e){

  const newItems = [...product];
  for(let i=0;i<newItems.length;i++){
      if(newItems[i].id===e){
        if(newItems[i].q>1){
          newItems[i].q--;
    //    console.log(newItems);
        setProduct(newItems);
      }
    }
  }
}



  const filterdata=
    product.filter((product)=>{
      // console.log(product);
    for(let i=0;i<arrayvl.length;i++){
      if(product.id===arrayvl[i]){
       // SetFilterarray(product.q)
        return product;
        }}
    }).map((product,index)=>(
      <div class="orderitem">
        <div class="prodectcard m-3">
          <span class="orderdesign">
             <div><img class="orderimage" src={product.item}></img></div>
             <div class="flex flex-col"><span>{product.Itemname}</span><span class="pricecolour">{product.price}</span><span class="relative top-5">
                 <button onClick={()=>DecreaseQuantitly(product.id)} class="bg-gray-200 hover:bg-blue-300 mr-2 rounded-md "><KeyboardArrowLeftIcon/></button>{product.q}
                 <button class="bg-gray-200 hover:bg-blue-300 ml-2 rounded-md" onClick={()=>IncreaseQuality(product.id)}><KeyboardArrowRightIcon/></button>
               </span></div>
             <div class="delete"><button class="m-2 rounded-md hover:bg-red-500" onClick={()=>filter_data(product.id)}><DeleteOutlinedIcon/></button></div>
          </span>
          </div>
    </div>
    ))
    
    
    return(
        <div class="order flex flex-col justify-between">
            <div class="icon py-1"><nav>
              <span><button class="ml-3 mt-2" onClick={()=>history.goBack()}><BiArrowBack/></button></span>
            </nav></div>
            <div className="flex justify-between"><span class="title mt-3 ml-32">My Cart</span></div>
            <div class="m-3 orderavailable"><span>{filterdata}</span>
            <span class="itemlength"> {sarathi()} {sum} Item</span></div>
            <div class="totalprice"><button class="ckeckout"><Link to="/">Proceed to Checkout</Link></button></div>
        </div>
    )
}

export default Order;






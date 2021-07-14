import React,{useContext,useState} from "react";
import {RiMenu2Line} from 'react-icons/ri';
//import { IoBagOutline } from "react-icons/io5";
import Badge from '@material-ui/core/Badge'
import { Link } from "react-router-dom";
import data from '../../src/data'
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import "./header.css";
import orderitem from "../../src/ordertiem";

const Header =()=>{
   
   //const arrayval =useContext(orderitem);
   const value =useContext(data);
  const [product,setProduct]=useState(value.item);
  const arrayvl=useContext(orderitem);
  //const quanditys=useContext(quandity);
  const [arrayval,setArrival]=useState(arrayvl);
  //const [qvalue]=useState(quanditys);
 // const history =useHistory();
  //const [amount,setAmount]=useState([]);
  let [sum] = useState(0);

//   console.log("Sum1 "+sum);

  const cartItems=product.map((product)=>{
    for(let i=0;i<arrayval.length;i++){
      
      if(product.id===arrayval[i]){
        
        // console.log(product.q);
        sum+=product.q;
  
      }
    
     }
     console.log("Sum "+sum);
    //  return sum;
    //  setSum(sum);
  }
  )
//   console.log("Sum2 "+sum);

    return(
        <div className="header">
           <span className="iconss"><RiMenu2Line/></span>
           <span className="icons"><Link to="/order" >
           <Badge color="secondary" badgeContent={sum} >
                {cartItems} <ShoppingCartOutlined/>
            </Badge>
            </Link>
            </span>
        </div>
    )
}

export default Header;
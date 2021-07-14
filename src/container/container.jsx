import React, { useContext } from 'react';
import "./container.css";
import data from '../data';
import {Link} from 'react-router-dom';

//import {useHistory} from 'react-router-dom'
const Container = ()=>{
   
//     const history = useHistory()
//     console.log(history);

//    const eventHandler=(e)=>{
//     history.push("/detail");
    
//    }

    const value =useContext(data);
    const item = value.item;
    console.log(item);
    return(
        <div class="flex flex-wrap m-2 rounded-lg mainpage">
           {/* <data.Consumer> */}
           
            {item.map((e)=> <Link class="product flex text-center flex-col justify-end  text-center w-40 h-48 mx-2 my-3 rounded-lg " 
            style={{backgroundImage:`url(${e.item})`}}
             to={{pathname: `/detail/${e.id}`}} key={e.id}> 
            {/* <img src={e.item}></img> */}
            {/* <span value={e.Itemname} key={e.id} class="flex text-center flex-col justify-between"> */}
                <h1 class="itemname" value={e.id} >{e.Itemname}</h1>
                <p class="price" value={e.id} >Price: {e.price}</p>
            {/* </span>  */}
            </Link>)}
           {/* </data.Consumer> */}
        </div>
    )
}

export default Container;
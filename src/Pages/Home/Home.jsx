import React from "react";
import Header from "../../Header/header";
import Container from "../../container/container";
import "./home.css"

const Home =() =>{


    return(
        <div class="text-center bg-gray-50">
            <nav>
               <Header/>
            </nav>
            <div class="font-semibold  text-3xl mx-1 mt-3">Discover Our Exclusive Headphones</div>
            <div>
                <ul class ='flex m-3 navigationpart'>
                    <li class="flex-auto hover:bg-blue-300 p-2 rounded-full">Trending</li>
                    <li class="flex-auto hover:bg-blue-300 p-2 rounded-full" >Populor</li>
                    <li class="flex-auto hover:bg-blue-300 p-2 rounded-full">We recommend</li>
                </ul>
            </div>
            <Container/>
        </div>
    )
}

export default Home;
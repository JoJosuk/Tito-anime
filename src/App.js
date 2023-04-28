import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Mcard from "./Mcard";
import './App.css'
import Sicon from'./search.svg'

const API_URL = 'https://api.consumet.org/anime/gogoanime/top-airing'
const API_SEARCH_URL = 'https://api.consumet.org/anime/gogoanime'

const App = () => {
    const [movie, setMovie] = useState([]);
    const searchAni = async (title)=>{
        let response;
        title ==''?( 
            response = await fetch  (`${API_URL}`)
        )
        :
        (
         
         response = await fetch  (`${API_SEARCH_URL}/${title}?page=1`)
        )
        console.log(`${API_SEARCH_URL}/${title}?page=1`);
        const data = await response.json();
        setMovie(data.results);
        console.log(movie);
    }
    useEffect(() => {
       searchAni(''); 
    }, []);
    return (
        
        <div className="app">
            <h1>TITO ANIME</h1>
            <div className="search">
                <input type="text" 
                placeholder="Search for anime"
                onChange={(e)=>searchAni(e.target.value)}
                />
                <img src={Sicon} alt="searchicon" onClick={()=>{}}/>
            </div>
            {
                movie.length>0 
                ?
                (
                <div className="container">
                    {movie.map((m)=>(<Mcard movie={m} /> ))}
                    
                </div>
                ):
                (
                    <div className="empty">
                        <h1>no ANIME found</h1>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;
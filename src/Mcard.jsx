import React from "react";

const mcard=({movie})=>{
    const handleClick=()=>{
        window.open(movie.url,'_blank');
    };
    return(
        <div className="movie"  onClick={handleClick}>
            <div>
                {/* <p>{movie.id}</p> */}
                <p>{movie.releaseDate}</p>
            </div>
            <div>
                <img src={movie.image} alt="hey" />
            </div>
            <div>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default mcard;
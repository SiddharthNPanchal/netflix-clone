import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css'
//const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async  function fetchData(){
            const request = await axios.get(requests.fetchUpcoming);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
                )
        }
        fetchData();
    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }
    console.log(movie);
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}
        >
            <div className="contents">
                {/* title*/ }
                <h1 className="headerTitle">
                    {movie?.title}
                </h1>
                <button className="bannerButton">Play</button>
                <button className="bannerButton">MyList</button>
    <h1 className="overview">{movie?.overview}
    {truncate(movie?.overview,200)}
    </h1>
            </div>
            <div className="fadeBottom"/>
            </header>
    );
}

export default Banner;
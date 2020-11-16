import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './banner.css'
//const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie,setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async  function fetchData(){
            const request = await axios.get(requests.fetchUpcoming);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
                )
        }
        fetchData();
    },[])

    const opts={
        height:"390",
        width:"100%",
        playersVars:{
           //,
           autoplay:1,
        },
    }
    const handleClick2 = (movie) => {
        setTrailerUrl("")
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
            document.getElementById("myButton").value="Close";
        }else{
            movieTrailer(movie?.title || "").then((url)=>{
                let urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))
                 
            }

            ).catch(err=>{
                console.log("Error")
            })
        }
    }


    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }
    console.log(movie);
    return (
        <div>
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
                <button className="bannerButton" id="myButton" onClick={()=>handleClick(movie)}>Play</button>
                <button className="bannerButton" onClick={()=>handleClick2(movie)}>Close</button>
    <h1 className="overview">{movie?.overview}
    {truncate(movie?.overview,120)}
    </h1>
            </div>
            <div className="fadeBottom"/>
           
            </header>
            
            <div className="row_name">
               {trailerUrl && <YouTube className="video" videoId={trailerUrl} opts={opts}/>         } 
            </div>
            </div>
    );
}

export default Banner;
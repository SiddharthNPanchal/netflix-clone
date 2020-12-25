import React,{useState, useEffect} from "react";
import './Row.css';
import App from "./App";
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original";
function Row({title, fetchUrl, isLargeRow}){

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        } 
        fetchData();       
    },[fetchUrl])

    // console.log(movies);


    const opts={
        height:"390",
        width:"100%",
        playersVars:{
           //,
           autoplay:1,
        },
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
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
    return(
        <div className="row">
            <h2 className="title">   { title } </h2> 
            {/* container */}
            <div className="row_posters">
            {/* posters */}
            
            {movies.map(movie => {
                    console.log(movie.poster_path);
                    return( <img key = {movie.id} 
                        onClick = {()=>handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    className={`posterStyle ${isLargeRow && "rowPosterLarge"}`}
                     alt="movie.original_title" />)      
            })}
            </div>
            <div className="row_name">
               {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>         } 
            </div>
        </div>
    )
}

// const styles = {
//     img:{
//         width:100,
//         height:40
//     },
    
//};

export default Row
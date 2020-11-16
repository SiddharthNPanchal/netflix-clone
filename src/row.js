import React,{useState, useEffect} from "react";
import './Row.css';
import App from "./App";
import axios from './axios';
const base_url = "https://image.tmdb.org/t/p/original";
function Row({title, fetchUrl, isLargeRow}){

    const [movies, setMovies] = useState([]);

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

    return(
        <div className="row">
            <h2>   { title } </h2> 
            {/* container */}
            <div className="row_posters">
            {/* posters */}
            
            {movies.map(movie => {
                    console.log(movie.poster_path);
                    
                    return( <img key = {movie.id} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    className={`posterStyle ${isLargeRow && "rowPosterLarge"}`}
                     alt="movie.original_title" />)
                 
            })}
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
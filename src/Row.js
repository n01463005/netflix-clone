import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from "./axios";
import requests from './requests';
import './Row.css';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
/*This is for the Youtube trailer*/    
    const[trailerUrl,setTrailerUrl] = useState("");


    useEffect (() => {
// if it is blank ie [] means run once when the row loads, and dont run again.
// and if we pass [movie] it is gonna run every time when [movie] changes {thats y it is called React} is also called dependecy bcs it is dependent in  the movie changes.
     async function fetchData() {
         const request = await axios.get(fetchUrl);
         //console.log(request);
         setMovies(request.data.results)
         return requests;
     }
     fetchData();
    }, [fetchUrl]); //[fetchUrl] is must so that it loads the page.
   // console.log(movies);
   const opts = {
       height:"390",
       width:"100%",
       playerVars:{

        autoplay:1,
       }
   };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {

                const urlParams = new URLSearchParams( new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/* several row_posters(s) */}
                  
                   {movies.map(movie => (
                       <img 
                       key={movie.id}
                       onClick={() => handleClick(movie)}
                       className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path :movie.backdrop_path
                    }`} 
                       alt={movie.name} 
                       />
                   ))}

            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row


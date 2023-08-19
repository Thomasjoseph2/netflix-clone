
import "./Banner.css";

import { IMG_URL } from "../../constants";

import { useGetMovies } from "../../useGetMovies";

export default function Banner() {

  const movie=useGetMovies()

  
  return (
 
 <div style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path

:"" })`}}  className="banner">
     
      <div className="content">
 
        <h1 className="title">{movie ? movie.title : ""}</h1>
 
        <div className="banner_buttons">
 
          <button className="button">Play</button>
 
          <button className="button">My list</button>
 
        </div>
 
        <h1 className="description">

        {movie ? movie.overview : ""}

        </h1>
 
      </div>
 
      <div className="fade-bottom"></div>
 
    </div>
 
 );

}

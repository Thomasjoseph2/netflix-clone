import React ,{ useEffect,useState }from 'react'
import "./RowCard.css";
import { IMG_URL,API_KEY} from '../../constants'
import axios from '../../axios';
import YouTube from 'react-youtube';

const RowCard = (props) => {
 
      const opts = {
        height: '390',
        width: '100%',
      
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

  const[movieCards,setMoviecards]=useState([])
  const[urlId,seturlId]=useState('')
  
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMoviecards(response.data.results)
    })
  },[props.url])
  
  const handleMovie=(id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
     if(response.data.results.length!==0){
      seturlId(response.data.results[0])
     }else{
      console.log("no videos");
     }
    })
  }
  const handleCloseVideo = () => {
    seturlId(null); // Reset URL to close the video
  };
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
         {movieCards.map((movie,index)=>
          <img onClick={()=>{handleMovie(movie.id)}} key={`movie-${index}`} className={props.isSmall?'smallposter':'poster' }src={`${IMG_URL+movie.backdrop_path}`} alt="card" />
         )}
      
  
      </div>

      <div style={{ marginTop: "20px", position: "relative", textAlign: "right" }}>
      {urlId && <button className='close-btn' onClick={handleCloseVideo}>×</button>}
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
    </div>
  )
}

export default RowCard

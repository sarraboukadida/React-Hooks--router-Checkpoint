import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';


const Description = ({addMovie, movies, setMovies}) => {

    const {title} = useParams();
    const dmovie = movies.find ((dm) => dm.title === title )


  return (
    <div>
     <h1> {dmovie.title} </h1>
     <h3> {dmovie.description} </h3>
     <br></br>
     <center><ReactPlayer url={dmovie.trailerLink} /> 
     <br></br>
     <Link to='/' > Home page </Link>
     </center>

    </div>
  )
}

export default Description
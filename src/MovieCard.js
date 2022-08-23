import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
  return (
    <div>
    <figure className='movie'>
  <div class="movie__hero">
    <img src={movie.posterURL} class="movie__img" alt="image"/>
  </div> 
   
  <div className="movie__content">
  <center>
   
      <h1 className="heading__primary"> {movie.title}      <i className="fas fa-fire"></i></h1>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}/>
        </center>
    
      <div className="movie__tag movie__tag--1">{movie.description}</div>
    
    </div>
   

  <div class="movie__price">$12.56</div>
</figure>
    </div>
  )
}

export default MovieCard
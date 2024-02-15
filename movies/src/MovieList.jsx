// MovieList.js
import React from "react"
import MovieCard from "./MovieCard"


const MovieList = () => {
  return (
    <div>
      {movie.map( el => <MovieCard movie={el}/>)}
    </div>
  )
}

export default MovieList

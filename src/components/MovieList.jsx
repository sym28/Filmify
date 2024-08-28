import React from 'react'
import { useState } from 'react';

export default function MovieList({ movies, title, onMovieClick }) {

  const [showAll, setShowAll] = useState(false);

  // Number of movies to show initially
  const moviesToShow = 4;

  const handleShowMore = () => {
    setShowAll(!showAll);
  }

  return (
    <>
      <h2 className='text-3xl font-semibold text-gray-800 flex justify-center m-10'>{title}</h2>
      <div className="p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(showAll ? movies : movies.slice(0, moviesToShow)).map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-500 p-2 rounded-lg overflow-hidden cursor-pointer"
              // style={{ maxWidth: '400px', height: 'auto' }}
              onClick={() => onMovieClick(movie)}
            >
              <img
                className="w-full rounded-lg h-auto object-cover"
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="text-white text-lg font-semibold text-center mt-2">
                {movie.title}
              </p>

            </div>
          ))}
        </div>
        {movies.length > moviesToShow && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="border border-black text-gray-800 font-medium bg-white px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

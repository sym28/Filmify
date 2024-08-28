const API_KEY = import.meta.env.VITE_API_KEY
import { useEffect, useState } from "react"

export default function MovieModal({ movie, onClose }) {

  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US&api_key=${API_KEY}`)
        const data = await res.json()
        console.log(data)
        setMovieDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovieDetails()
  }, [])
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {movieDetails && (
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <button
                  className="absolute top-2 right-3 p-2 rounded-lg text-red-600 font-semibold hover:bg-gray-100"
                  onClick={onClose}>Close</button>
                <img
                  className="w-full h-96 object-contain"
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movieDetails.poster_path}`}
                  alt="Movie Poster"
                />
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-2">{movieDetails.title}</h1>
                  <p className="text-gray-700 mb-4">{movieDetails.overview}</p>
                  <p className="text-gray-600"><span className="font-bold">Release Date:</span> {movieDetails.release_date}</p>
                  <p className="text-gray-600"><span className="font-bold">Score:</span> {movieDetails.vote_average * 10}%</p>
                  <p className="text-gray-600"><span className="font-bold">Runtime:</span> {movieDetails.runtime} mins</p>
                </div>
              </div>
            )}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <div class="p-4">
  <h2 class="text-2xl font-bold mb-2">Movie Title</h2>
  <p class="text-gray-600 mb-2">Runtime: 120 mins</p>
  <p class="text-gray-700">This is a brief description of the movie. It gives an overview of the plot and main characters.</p>
</div> */}
// movie details
// title, release_date,  , poster_path, vote_average


// <div className="sm:flex sm:items-start">
//                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                   {/* content */}
//                   <button
//                     type="button"
//                     className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     onClick={onClose}
//                   >
//                     Close
//                   </button>
//                   <h3
//                     className="text-base font-semibold leading-6 text-gray-900"
//                     id="modal-title"
//                   >
//                     Deactivate account
//                   </h3>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       {movie.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
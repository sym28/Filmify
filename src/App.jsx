import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import MovieList from './components/MovieList'
import MovieModal from './components/MovieModal'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  //image path - https://media.themoviedb.org/t/p/w220_and_h330_face/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const getPopular = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
        const data = await res.json()
        setMovies(data.results)
        setTitle('Trending:')
      } catch (error) {
        console.log(error)
      }
    }
    getPopular()
  }, [])

  const fetchMovies = async (query) => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}
      &api_key=${API_KEY}`
      )
      const data = await res.json()
      setMovies(data.results)
      setTitle('Results:')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm)
    fetchMovies(searchTerm)
  }
  const handleMovieClicked = (movie) => {
    setSelectedMovie(movie)
  }
  const handleCloseModal = () => {
    setSelectedMovie(null)
  }

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <MovieList movies={movies} title={title} onMovieClick={handleMovieClicked} />
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </>
  )
}

export default App

import React from 'react'
import "./App.css"
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Cards from './Components/Card/Card'
import MovieList from './Components/MoviesList/MovieList'
import MoviesDetails from './Components/MoviesDetails/MoviesDetails'
const App = () => {
  return <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route index element={<Cards />} />

          <Route Exact path="movie/:id" element={<MoviesDetails/>} />
          <Route Exact path="movies/:type" element={<MovieList/>} />
          <Route Exact path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>;
}

export default App
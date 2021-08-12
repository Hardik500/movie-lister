import './App.css';

import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'

import MovieItem from './components/MovieItem';

function App() {
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesData, setMoviesData] = useState([]);

  const fetchData = useCallback(async () => {
    const result = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`);
    const data = result.data;

    setCurrentPage(currentPage + 1);
    setMoviesData([...moviesData, ...data.results]);
    setTotalPage(data.total_pages)
  }, [moviesData, currentPage])

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    console.log(moviesData);
  }, [moviesData])

  if (moviesData.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={moviesData.length}
        next={fetchData}
        loader={<h2>Loading...</h2>}
        hasMore={currentPage < totalPage}
      >
        <div className="movie-container">
          {moviesData.map((movieData, index) => <MovieItem key={index} data={movieData} />)})
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;

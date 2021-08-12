import './App.css';

import axios from 'axios';
import { useEffect, useState, useCallback, useMemo } from 'react';
import debounce from 'lodash.debounce';
import InfiniteScroll from 'react-infinite-scroll-component'

import MovieItem from './components/MovieItem';
import SkeletonLoader from './components/SkeletonLoader'
import { movieUtilityHandler } from './utils/helper';

const height = 300;
const width = 200;

function App() {
  const [totalPage, setTotalPage] = useState(null);
  const [filterType, setFilterType] = useState('DISCOVER');
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [searchMovieText, setSearchMovieText] = useState('');

  const resetState = () => {
    setMoviesData([]);
    setCurrentPage(1);
  }

  const changeHandler = (event) => {
    resetState();
    setSearchMovieText(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 150)
    , []);

  const fetchData = useCallback(async () => {
    const result = await axios.get(movieUtilityHandler(filterType, { currentPage, searchMovieText }));
    const data = result.data;

    setCurrentPage(currentPage + 1);
    setMoviesData([...moviesData, ...data.results]);
    setTotalPage(data.total_pages)
  }, [moviesData, currentPage, filterType, searchMovieText])

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (searchMovieText && searchMovieText !== '')
      setFilterType('SEARCH')
    else
      setFilterType('DISCOVER')

    fetchData();
  }, [searchMovieText])

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    }
  }, []);

  return (
    <div className="container">
      <div>
        <input className="search-bar--input" type="text" placeholder="Search a movie" onChange={debouncedChangeHandler} />
      </div>

      <InfiniteScroll
        dataLength={moviesData.length}
        next={fetchData}
        loader={<div className="movie-container">{Array.from(Array(20).keys()).map((e, index) => <SkeletonLoader key={index} height={height} width={width} />)}</div>}
        hasMore={currentPage < totalPage}
        endMessage={<hr/>}
      >
        <div className="movie-container">
          {moviesData.filter((movieData) => movieData.poster_path !== null).map((movieData, index) => <MovieItem key={index} data={movieData} height={height} width={width} />)}
        </div>

      </InfiniteScroll>
    </div>
  );
}

export default App;

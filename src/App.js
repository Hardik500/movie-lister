import './App.css';

import axios from 'axios';
import { useEffect, useState, useCallback, useMemo } from 'react';
import debounce from 'lodash.debounce';
import InfiniteScroll from 'react-infinite-scroll-component'

import MovieItem from './components/MovieItem';

import { movieUtilityHandler } from './utils/helper';

function App() {
  const [totalPage, setTotalPage] = useState(null);
  const [filterType, setFilterType] = useState('DISCOVER');
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [sortByPopularity, setSortByPopularity] = useState('desc');
  const [searchMovieText, setSearchMovieText] = useState('');

  
  const resetState = useCallback(() => {
    setMoviesData([]);
    setCurrentPage(1);
  }, [])

  const changeHandler = (event) => {
    resetState();
    setSearchMovieText(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500)
  , []);

  const fetchData = useCallback(async () => {
    const result = await axios.get(movieUtilityHandler(filterType, {sortByPopularity, currentPage, searchMovieText}));
    const data = result.data;

    console.log(currentPage, moviesData)
    setCurrentPage(currentPage + 1);
    setMoviesData([...moviesData, ...data.results]);
    setTotalPage(data.total_pages)
  }, [moviesData, currentPage, filterType, sortByPopularity, searchMovieText])

  // useEffect(() => {

  //   async function applyFilters(){
  //     const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.${sortByPopularity}&api_key=${process.env.REACT_APP_API_KEY}&page=1`);
  //     const data = result.data;

  //     resetState();
  //     setMoviesData(data.results);
  //     setTotalPage(data.total_pages)
  //   }

  //   applyFilters();
  // }, [sortByPopularity])

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if(searchMovieText && searchMovieText !== ''){
      setFilterType('SEARCH')
    }
    else {
      console.log('HERE');
      setFilterType('DISCOVER')
    }

    fetchData();
  }, [searchMovieText])

  useEffect(() => {
    console.log("🚀 ~ file: App.js ~ line 79 ~ App ~ currentPage, moviesData", currentPage, moviesData)
  }, [currentPage, moviesData])

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    }
  }, []);

  return (
    <div className="container">

      <div>
        <h1>Search</h1>
        <div>
          <input type="text" placeholder="Search a movie" onChange={debouncedChangeHandler}/>
        </div>
      </div>

      {/* <div>
        <h2>Filters</h2>
        <div>
          <select name="sort" onChange={(e) => setSortByPopularity(e.target.value)} defaultValue={"desc"}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
          </select>
        </div>
      </div> */}

      <InfiniteScroll
        dataLength={moviesData.length}
        next={fetchData}
        loader={<h2>Loading...</h2>}
        hasMore={currentPage < totalPage}
        endMessage={<h2>No results found</h2>}
      >
        <div className="movie-container">
          {moviesData.filter((movieData) => movieData.poster_path !== null).map((movieData, index) => <MovieItem key={index} data={movieData} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;

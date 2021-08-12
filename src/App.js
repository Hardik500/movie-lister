import './App.css';

import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'

import Navbar from './components/Navbar';
import MovieItem from './components/MovieItem';
import SkeletonLoader from './components/SkeletonLoader'
import { movieUtilityHandler } from './utils/helper';

const height = 300;
const width = 200;

function App() {
  const [totalPage, setTotalPage] = useState(null);
  const [filterType, setFilterType] = useState('POPULAR');
  const [currentPage, setNextPage] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [searchMovieText, setSearchMovieText] = useState('');

  const resetState = () => {
    setMoviesData([]);
    setNextPage(1);
  }

  const fetchData = useCallback(async (nextData = false) => {
    console.log({currentPage, nextData});
    const result = await axios.get(movieUtilityHandler(filterType, { currentPage: nextData ? currentPage : 1, searchMovieText }));
    const data = result.data;

    
    if(nextData){
      setNextPage(currentPage + 1);
      setMoviesData([...moviesData, ...data.results]);
    }
    else{
      setNextPage(2);
      setMoviesData(data.results);
    }

    setTotalPage(data.total_pages)
  }, [moviesData, currentPage, filterType, searchMovieText])

  useEffect(() => {
    resetState();

    setTimeout(() => {
      fetchData();
    }, 500)
  }, [filterType])

  useEffect(() => {
    resetState();
    
    if (searchMovieText && searchMovieText !== '')
      setFilterType('SEARCH')
    else
      setFilterType('POPULAR')

    setTimeout(() => {
      fetchData();
    }, 500)
  }, [searchMovieText])

  return (
    <>
      <Navbar setFilterType={setFilterType} selectedFilterType={filterType} resetState={resetState} setSearchMovieText={setSearchMovieText}/>
      <div className="container">
        <InfiniteScroll
          dataLength={moviesData.length}
          next={() => fetchData(true)}
          loader={<div className="movie-container">{Array.from(Array(20).keys()).map((e, index) => <SkeletonLoader key={index} height={height} width={width} />)}</div>}
          hasMore={currentPage < totalPage}
          endMessage={<hr />}
        >
          <div className="movie-container">
            {
              moviesData
                .filter((movieData) => movieData.poster_path !== null && movieData.release_date)
                .map((movieData, index) => <MovieItem key={index} data={movieData} height={height} width={width} />)
            }
          </div>

        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;

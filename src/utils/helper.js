
const API_KEY = process.env.REACT_APP_API_KEY;

export const movieUtilityHandler = (filterType, props) => {
    const { currentPage, sortByPopularity, searchMovieText } = props;

    let searchQuery = 'https://api.themoviedb.org/3';

    if(filterType === 'SEARCH' && searchMovieText){
        searchQuery += `/search/movie?api_key=${API_KEY}&query=${searchMovieText}`
    } else {
        searchQuery += `/discover/movie?api_key=${API_KEY}`
    }

    if(sortByPopularity){
        searchQuery += `&sort_by=popularity.${sortByPopularity}`
    }

    if(currentPage){
        searchQuery += `&page=${currentPage}`
    }

    return searchQuery;
}
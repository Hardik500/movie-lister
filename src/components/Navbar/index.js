import './style.css';
import { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

const filterTypes = [
    { key: 'POPULAR', value: 'Popular' },
    { key: 'TOPRATED', value: 'Top Rated' },
    { key: 'UPCOMING', value: 'Upcoming' },
]

export default function Navbar({ setFilterType, selectedFilterType, resetState, setSearchMovieText }) {

    const changeHandler = (event) => {
        resetState();
        setSearchMovieText(event.target.value);
    };

    const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 150), []);

    useEffect(() => {
        return () => {
            debouncedChangeHandler.cancel();
        }
    }, []);

    return (
        <div className="navbar-container">
            {
                filterTypes.map((filterType) =>
                    <button
                        key={filterType.value}
                        className={`${filterType.key === selectedFilterType ? 'active' : ''} navbar-container--button`}
                        onClick={() => setFilterType(filterType.key)}
                    >
                        {filterType.value}
                    </button>
                )
            }
            <input className='navbar-container--input' type="text" placeholder="Search for a movie..." onChange={debouncedChangeHandler}/>
        </div>
    )
}
import './style.css'
import Image from '../Helper/Image';

export default function MovieItem({data, width, height}) {
    const {title, poster_path, release_date} = data;

    const thumbnail = 'https://image.tmdb.org/t/p/w200/' + poster_path
    const src = 'https://image.tmdb.org/t/p/w500/' + poster_path

    return (
        <div className="movie-item--container" style={{width, height}}>
            <Image alt={title} src={src} thumbnail={thumbnail} width={width} height={height} />
            <div className="movie-item--overlay"></div>
            <div className="movie-item--overlay-text">
                <p className="movie-item--title movie-item--title-1">{title}</p>
                <br/>
                <p className="movie-item--title movie-item--title-2">{release_date.split("-")[0]}</p>
            </div>
        </div>
    )
}
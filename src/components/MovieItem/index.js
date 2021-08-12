import './style.css'
import Image from '../Helper/Image';

export default function MovieItem({data, width, height}) {
    const {title, poster_path} = data;

    const thumbnail = 'https://image.tmdb.org/t/p/w200/' + poster_path
    const src = 'https://image.tmdb.org/t/p/w500/' + poster_path

    return (
        <div className="movie-item--container" style={{width, height}}>
            <Image alt={title} src={src} thumbnail={thumbnail} width={width} height={height} />
            <div className="movie-item--overlay"></div>
            <div className="movie-item--overlay-text">
                <p className="movie-item--title">{title}</p>
            </div>
        </div>
    )
}
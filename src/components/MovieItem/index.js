import './style.css'
import Image from '../Helper/Image';

export default function MovieItem({data}) {
    const {title, poster_path} = data;

    const thumbnail = 'https://image.tmdb.org/t/p/w200/' + poster_path
    const src = 'https://image.tmdb.org/t/p/original/' + poster_path

    return (
        <div className="movie-item--container">
            <Image alt={title} src={src} thumbnail={thumbnail} width={200} height={400}/>
            <div className="movie-item--overlay"></div>
            <div class="movie-item--overlay-text">
                <p className="movie-item--title">{title}</p>
            </div>
        </div>
    )
}
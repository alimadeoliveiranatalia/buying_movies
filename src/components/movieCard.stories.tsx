import '../styles/movie-card.scss';
import { MovieCard } from './MovieCard';

export default {
    title: 'components/MovieCard',
    component: MovieCard
}

//export function Default(){}

export const Action = () => 
    <MovieCard
        title='Underdog'
        poster='https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg'
        rating='10/10'
        runtime='84 min'
    />

export const Comedy = () => <MovieCard title='comedy' poster='' rating='' runtime=''/>

export const Documentary = () => <MovieCard title='documentary' poster='' rating='' runtime=''/>

export const Drama = () => <MovieCard title='drama' poster='' rating='' runtime=''/>

export const Horror = () => <MovieCard title='horror' poster='' rating='' runtime=''/>

export const Family = () => <MovieCard title='family' poster='' rating='' runtime=''/>




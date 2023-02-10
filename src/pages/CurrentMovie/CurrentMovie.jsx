import { Link, Outlet  } from 'react-router-dom';
import { StyledLink } from './CurrentMovie.styled';

export const CurrentMovie = () => {
    return (
        <div>
            <Link to="" >&#8678;Go to back</Link>
            <h2>Film name</h2>
            <img src="https://cdn.pixabay.com/photo/2021/10/27/13/15/cat-6747298_960_720.jpg" width="340px" alt="pets cats"/>
            <h3>Overwiev</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa molestias corporis expedita modi harum sed amet placeat numquam pariatur!</p>
            <h3>Genres</h3>
            <p>Drama History War</p>
            <p>Additional information</p>            
            <ul>
                <li><StyledLink to="cast">Cast</StyledLink></li>
                <li><StyledLink to="reviews">Reviews</StyledLink></li>
            </ul>
            <Outlet />
        </div>
       
    )
}
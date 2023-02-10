import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import { Header, Link } from './Header/Header.styled';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { CurrentMovie } from '../pages/CurrentMovie/CurrentMovie';
import { Cast } from '../components/Movie/Cast/Cast';
import { Reviews } from '../components/Movie/Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/currentmovie" element={<CurrentMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};

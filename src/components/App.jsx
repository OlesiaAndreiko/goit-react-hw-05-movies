import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import { Header, Link } from './Header/Header.styled';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
};

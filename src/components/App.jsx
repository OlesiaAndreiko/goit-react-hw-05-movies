import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { CurrentMovie } from '../pages/CurrentMovie/CurrentMovie';
import { Cast } from '../pages/CurrentMovie/Cast/Cast';
import { Reviews } from '../pages/CurrentMovie/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/currentmovie" element={<CurrentMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
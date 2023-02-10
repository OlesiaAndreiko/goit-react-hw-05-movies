import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        <li>
          <Link to="/movies/currentmovie">Fiim1</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim2</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim3</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim4</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim5</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim6</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim7</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim8</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Fiim9</Link>
        </li>
      </ul>
    </main>
  );
};

import { Link } from 'react-router-dom';

export const Home = () => {


  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        <li>
          <Link to="/movies/currentmovie">Film1</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film2</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film3</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film4</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film5</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film6</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film7</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film8</Link>
        </li>
        <li>
          <Link to="/movies/currentmovie">Film9</Link>
        </li>
      </ul>
    </main>
  );
};

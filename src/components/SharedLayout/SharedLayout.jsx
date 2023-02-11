import { Container, Header, StaledLink } from './SharedLayou.styled';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StaledLink to="/" end>
            Home
          </StaledLink>
          <StaledLink to="/movies">Movies</StaledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, StaledLink } from './SharedLayou.styled';

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
      <Suspense fallback={<div>Loading Movielist...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

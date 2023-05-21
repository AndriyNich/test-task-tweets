import { StyleNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyleNavLink to="/">Home</StyleNavLink>
      <StyleNavLink to="/tweets">Tweets</StyleNavLink>
    </nav>
  );
};

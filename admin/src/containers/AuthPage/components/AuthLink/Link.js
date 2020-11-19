import { Link as Base } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(Base)`
  p {
    color: ${({ theme }) => theme.main.colors.white};
  }

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: 0;
  }
`;

export default Link;

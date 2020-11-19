import styled from 'styled-components';

const AuthPageWrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.main.colors.black};
`;

export default AuthPageWrapper;
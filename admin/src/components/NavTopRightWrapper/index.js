import styled from 'styled-components';

const NavTopRightWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  z-index: 1050;

  button.localeDropdownContent.btn {
    padding-left: 2rem;

    span {
      font-size: 13px;
      color: ${props => props.theme.main.colors.black} !important; 
    }

    &:focus,
    &:active,
    &:hover {
      background-color: ${props => props.theme.main.colors.white} !important; 
    }
  }
`;

export default NavTopRightWrapper;

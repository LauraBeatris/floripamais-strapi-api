import styled from 'styled-components';
import Background from '../../../../assets/images/background_empty.svg';

const Section = styled.section`
  text-align: ${({ textAlign }) => textAlign};
`;

Section.defaultProps = {
  textAlign: 'initial',
};

export default Section;

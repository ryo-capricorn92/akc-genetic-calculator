import styled from 'styled-components';

const Title = styled.h1.withConfig({
  displayName: 'Title',
})`
  background-color: #eeebf4;
  color: #322547;
  font-weight: normal;
  letter-spacing: 2px;
  margin: 0;
  padding: 20px 30px;
  text-transform: uppercase;
`;

export default Title;

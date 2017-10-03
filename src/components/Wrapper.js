import styled from 'styled-components';

const Wrapper = styled.div `
  max-width: 1150px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export default Wrapper;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  @media (max-width: 815px) {
  display:block;
  text-align:center;
  }
`;

export const Selector = styled.select`
width:50%;
@media (max-width: 815px) {
  width:80%;
  }
`;
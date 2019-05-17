import styled from 'styled-components';

export const Wrapper = styled.div`
text-align:center;
margin: 10px 0;
`;

export const Item = styled.span`
border:1px solid red;
background:${props => props.active};
padding:5px;
`;

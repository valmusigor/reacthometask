import styled from 'styled-components';

const Field = styled.div`
display:flex;
padding 15px;
justify-content:center;
`;
const Text = styled.input`
min-height:41px;
flex-basis:40%;
border-radius:5px 0 0 5px;
border:0;

`;
const Btn = styled.button`
min-height:43px;
border-radius:0 5px 5px 0;
width:100px;
border:0;
`;

export { Field, Text, Btn };

import styled from 'styled-components';

const Wrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding:15px;
`;
const Field = styled.input`
width:200px;
min-height:30px;
font-weight: 400;
line-height: 1.5;
color: #495057;
border: 1px solid #ced4da;
border-radius: 5px;
`;
const Btn = styled.button`
grid-column:1/3;
justify-self: center;
width:30%;
min-height:35px;
color: #fff;
background-color: #007bff;
border:1px solid #007bff;
border-radius: 5px;
:hover{
    background:#0100ff;
    box-shadow: 0px 1px 6px 4px #6c757d;
    }
`;
const Error = styled.span`
display:${props => props.display};
color:red;
`;

export {
  Wrapper, Field, Btn, Error,
};

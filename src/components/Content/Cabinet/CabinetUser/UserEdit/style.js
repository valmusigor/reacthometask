import styled from 'styled-components';

export const Wrapper = styled.div`
padding: 10px;
max-width:30%;
margin:0 auto;
text-align:center;
position:relative;
`;

export const Item = styled.div`
display:flex;
flex-wrap:wrap;
margin-top: 10px;
justify-content:space-between;
`;

export const Label = styled.span`
`;

export const Field = styled.input`

`;

export const ErrorMessage = styled.span`
position:absolute;
right:-100%;
color:red;
`;

export const Btn = styled.button`
margin:0 auto;
max-width:70%;
min-height:35px;
text-align:center;
color: #fff;
background-color: #007bff;
border:1px solid #007bff;
border-radius: 5px;
:hover{
    background:#0100ff;
    box-shadow: 0px 1px 6px 4px #6c757d;
    }
`;

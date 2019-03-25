import styled from 'styled-components';

const Wrapper = styled.div`
display:${props => props.visibly};
position:absolute;
top:35px;
background-color: #007bff;
border:1px solid #007bff;
border-radius: 5px;
width:100px;
right:0;
text-align:center;
font-size:15px;
`;
const Item = styled.span`
display:block;
padding:5px;
:hover{
    background:#0100ff;
    box-shadow: 0px 1px 6px 4px #6c757d;
    }
`;
const Btn = styled.button`
width:100px;
min-height:35px;
color: #fff;
font-weight:600;
background-color: #007bff;
border:1px solid #007bff;
:hover{
    background:#0100ff;
    box-shadow: 0px 1px 6px 4px #6c757d;
    }
`;


const Linki = styled.a`

text-decoration:none;
color:white;
font-weight:500;
`;


export {
  Wrapper, Item, Linki, Btn,
};

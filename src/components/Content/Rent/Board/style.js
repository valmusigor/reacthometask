import styled from 'styled-components';

export const Wrap = styled.div`
width:80%;
`;

export const Wrapper = styled.div`
 display:flex;
 width:100%;
 justify-content:center;
 flex-wrap:wrap;
`;

export const Item = styled.div`
border:1px solid white;
flex-basis:calc(80%/4 - 15px);
margin:0 15px;
margin-bottom:10px;
display:flex;
flex-direction:column;
`;

export const Content = styled.div`
word-break:break-all;
font-size:13px;
`;

export const Head = styled.div`
width:200px;
height:100px;
color:white;
background:url(${props => props.path_short_image});
position:relative;
`;

export const Price = styled.div`
position:absolute;
background:red;
`;

export const Square = styled.div`
position:absolute;
background:red;
right:-1px;
`;

export const Foot = styled.div`
margin-top:10px;
display:flex;
font-size:13px;
font-weight:600;
justify-content:space-around;
`;

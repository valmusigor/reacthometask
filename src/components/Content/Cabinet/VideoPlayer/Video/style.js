import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width:100%;
display:flex;
`;
const Player = styled.div`
max-width:60%;
text-align:center;
flex-grow:1;
`;
const List = styled.div`
max-width:40%;
background:white;
margin-top:-15px
overflow-y: scroll;
    height: 100vh;
`;
const Item = styled.div`
display:flex;
color:black;
padding:20px;
border-bottom:1px solid grey;
`;
const ImageLoading=styled.div`
`;
export { Wrapper, Player, List, Item, ImageLoading };

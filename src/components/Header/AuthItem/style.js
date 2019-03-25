import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
justify-self:end;
display:flex;
align-self: center;
margin-right:10px;
`;
const Item = styled.div`
align-self: center;
margin-right:5px;
font-weight:500;
`;
const Btn = styled.button`
width:100px;
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

export { Wrapper, Item, Btn };
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
justify-self:end;
display:flex;
align-self: center;
margin-right:10px;
position:relative;
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
    :after {
        display: inline-block;
        margin-left: 10px;
        vertical-align: .255em;
        content: "";
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;
    }
`;

export { Wrapper, Item, Btn };
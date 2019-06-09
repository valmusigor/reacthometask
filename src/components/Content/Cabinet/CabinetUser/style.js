import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
padding:10px;
`;
export const Ava = styled.div`
margin-right:50px;
`;
export const Login = styled.h1`
text-align:center;
color:red;
`;
export const Image =  styled.img`
width:100px;
height:100px;
`;
export const Info = styled.div`
color:red;
`;
export const Item = styled.div`
display:flex;
`;

export const Label = styled.span`
margin-right:10px;
color:white;
`;

export const LinkEdit = styled(NavLink)`
color:#007bff;
`;

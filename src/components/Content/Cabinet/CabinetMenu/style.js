import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.div`
max-width:100%;
background: rgba(255,0,0,0.7);
padding:10px;
:hover{
    cursor: pointer ;
}
`;

export const LinkMenu = styled(NavLink)`
text-decoration:none;
color:white;
font-weight:600;
`;

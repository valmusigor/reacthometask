import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import imageButton from './images/button_menu.png';

const Wrapper = styled.div`
    display:flex;
    flex-grow:1;
    @media (max-width: 855px) {
        position:relative;
        flex-grow:0;
        
    }
    
`;
const List=styled.ul`
display:flex;
justify-content:start;
@media (max-width: 855px) {
    
    opacity:${props=>props.visibly};
    transition: opacity 0.5s ;
    background:black;
    padding-left:0;
    flex-direction:column;
    border-radius:5px 0 5px 5px;
    position:absolute;
    right:9px;
    top:40px;
    z-index:1;
}
`;

const Item = styled.li`

@media (max-width: 855px) {
text-align:end;
width:200px;
}
list-style-type: none;
padding:10px;
`;
const Linki = styled(NavLink)`
    text-decoration:none;
    
color:#cbbde2;
    font-weight:600;
    :hover{
        color:white;
    }
`;
const BtnMenu = styled.button`
display:none;
padding:0;
border:0;
margin:0;
width:48px;
height:34px;
boder-radius:5px;
align-self: center;
background:url(${imageButton});
@media (max-width: 855px) {
    
    display:block;
    margin-right:10px;
}
`;
const Elem = styled.span`
vertical-align:end;
color:red;
`;
export { Wrapper, Item, Linki, List, BtnMenu, Elem };

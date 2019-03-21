import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Wrapper = styled.div`
    display:inline-block;
    vertical-align:top;
`;
const Item = styled.li`
    display:inline-block;
    padding:10px;
`;
const Linki= styled(NavLink)`
    text-decoration:none;
color:#cbbde2;
    font-weight:600;
    :hover{
        color:white;
    }
`;
export { Wrapper, Item, Linki };

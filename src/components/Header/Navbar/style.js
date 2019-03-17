import styled from 'styled-components';

const Wrapper = styled.div`
    display:inline-block;
    vertical-align:top;
`;
const Item = styled.li`
    display:inline-block;
    padding:10px;
`;
const Link = styled.a`
    text-decoration:none;
color:#cbbde2;
    font-weight:600;
    :hover{
        color:white;
    }
`;
export { Wrapper, Item, Link };

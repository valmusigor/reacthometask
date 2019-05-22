import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
`;

export const SidebarR = styled.div`
border:2px solid white;
flex-basis: 20%;
`;
export const SidebarL = styled.div`
border:2px solid red;
flex-basis: calc(80% - 5px);
margin-right: 5px;
`;
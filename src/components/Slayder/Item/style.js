import styled from 'styled-components';

const Image = styled.img`
width:150px;
height:100px;
transition: all 0.5s;
:hover{
transform: scale(2, 2) rotate(-10deg);
}
`;

export default Image;

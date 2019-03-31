import styled from 'styled-components';

const Wrapper = styled.div`
grid-area:main;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
@media (max-width: 518px) {
    margin-top:60px;
    
}
`;

export default Wrapper;

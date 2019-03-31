import styled from 'styled-components';

const Wrapper = styled.div`
    display:inline-block;
    padding:10px;
    @media (max-width: 518px) {
        flex-grow:1;
        
    }
`;
const Images = styled.img`
    width:50px;
    height:50px;
`;

export  { Wrapper, Images };

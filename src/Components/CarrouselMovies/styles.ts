import styled from 'styled-components';

export const Container = styled.div`
  
    width: 100vw;
    height: 100vh;
    background: #000000a8;
    
    .carousel{
        height: 100%;
        padding: 4rem 2rem 0 2rem;
        

        display: flex;
        align-items: center;
        justify-content: space-between;

        overflow-x: hidden; 
        scroll-behavior: smooth; 
        h1{
            position: absolute;
        }
    }
`;

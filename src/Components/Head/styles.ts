import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
   
    width: 100vw;
    height: 10vh;
    background: none;
    padding: 0 10rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.h1`
    color: white;
`;

export const Options = styled.div`
    display: flex;
    
    .is-select{
        &::after{
        content:'';
        background: red;
        width: auto;
        height: 1px;
        }
    }
`; 
export const Option = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    h3{
        color: white;
        font: 400 1.2rem Poppins;
    }
    
    
    
`; 
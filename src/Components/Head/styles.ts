import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
   
    width: 100vw;
    height: 10vh;
    background: none;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 780px){
        padding: 0 10rem;
        
    }
`;

export const Logo = styled.h1`
    color: white;
    font: 500 2rem Poppins;
`;

export const Options = styled.div`
    display: flex;
    
    .is-select{
        &::after{
            content:'';
            background: red;
            width: auto;
            width: 100%;
            height: 1px;
        }
    }
`; 
export const Option = styled.button`
    display: flex;
    flex-direction: column;
    padding: 8px;
    background: none;
    
    h3{
        color: white;
        font: 400 1.2rem Poppins;
    }
     
`; 
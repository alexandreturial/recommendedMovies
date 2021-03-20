import styled,{ css} from "styled-components";

interface IContainer{
    scrollPosition: number
}

export const Container = styled.div<IContainer>`
    position: fixed;
   
    width: 100vw;
    height: 10vh;
    background: none;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${props => props.scrollPosition >= 650 && css`
        background: #000000d1;
    `}

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
    justify-content: flex-end;
    
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
    padding: 8px 10px;
    background: none;
    
    h3{
        color: white;
        font: 400 1.2rem Poppins;
    }
`; 

export const Search = styled.div`
    position: relative;
    
    svg{
        position: absolute;
        bottom: 22%;
        color: white;
        width: 25px;
        height: auto;
        cursor: pointer;
    }

`; 
export const Input  = styled.input`
    width: 0px;
   
    background: none;
    font: 400 1rem Poppins;
    color: white;
   
    padding: 10px 20px 10px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;

    &:focus {
        
        box-sizing: border-box;
        border-bottom: 2px solid #ccc;
        border-radius: 4px;
        width: 100%;
    }

   
   
`; 
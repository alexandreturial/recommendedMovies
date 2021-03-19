import styled from "styled-components";

export const Container = styled.div`
   
    width: 41rem;
    height: 21rem;
    position: absolute;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 7rem;
    top: 12rem; 
    div{
        h1{
        
            color: white;
        }
        p{
            font-size: .8rem;
            color: white;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: flex-end;
    width: 100%; 
    z-index: 2;

    button{
        background:none;
        svg{
            color: white;
        }        
    }
    .not-move{
        svg{
            color: red;
            opacity: .6;
            cursor: auto;
        }
    }
`;
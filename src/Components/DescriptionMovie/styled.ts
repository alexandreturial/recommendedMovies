import styled from "styled-components";

export const Container = styled.div`
   
    /* width: 41rem;
    height: 21rem; */
    position: absolute;
    top: 12rem; 

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3rem;
    div{
        h1{
        
            color: white;
        }
        p{
            font-size: .8rem;
            color: white;
        }
    }


    @media(min-width: 780px){
        width: 41rem;
        height: 21rem;

        left: 7rem;
        
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
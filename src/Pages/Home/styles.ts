import styled from 'styled-components';

interface IContainerProps{
    image: String
}

export const Container = styled.div<IContainerProps>`
    position: relative;
    background: url(${props => 'https://image.tmdb.org/t/p/original/'+props.image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    

    .prev{
       
        padding: 0 50rem 0 2rem;
    }

    .next{
        padding-left: 5rem;
    }

    .first{
        padding-left: 50rem;
    }

    .last{
        padding-right: 5rem;
        ::after{
            content:'';
            padding-left: 5rem;
        }
    }
    
`;



import styled from 'styled-components';

interface IContainerProps{
    image: String
}

export const Container = styled.div<IContainerProps>`
    width: 100vw;

    background: url(${props => 'https://image.tmdb.org/t/p/original/'+props.image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position-x: center;
`;



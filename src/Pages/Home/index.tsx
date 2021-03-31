import React from 'react';
import CarrouselMovies from '../../Components/CarrouselMovies';
import { useCarousel } from '../../Hooks/MoveSelectShow';


import { Container, Card } from './styles';

const Home: React.FC = () => {
    const { indexCard, listData } = useCarousel();
    return (
        <>
            {
                listData.length > 0 ? 
                (
                <Container image={listData[Number(indexCard)].backdrop_path}>     
                    <CarrouselMovies />
                </Container>
                ) :
                (
                <Card>     
                    <h1>TESTE</h1>
                </Card>
                )
            }
           
        </>
    );
}

export default Home;
import React from 'react';
import CardMovie from '../../Components/CardMovie';
import CarrouselMovies from '../../Components/CarrouselMovies';
import Description from '../../Components/DescriptionMovie';

import { useCarousel } from '../../Hooks/MoveSelectShow';

import { Container } from './styles';



const Home: React.FC = () => {
    const { indexCard, listData } = useCarousel();

    return (
        <>
            <Container image={listData[Number(indexCard)].backdrop_path}>
                <Description 
                    Name={listData[Number(indexCard)].title} 
                    Description={listData[Number(indexCard)].overview}
                />
                <CarrouselMovies size={listData.length}>
                    {
                        
                        listData.length > 0 &&
                        listData.map((movie, index) => (
                            <CardMovie
                                key={index}
                                image={movie.poster_path}
                                className={
                                    index === (Number(indexCard) - 1) ? "prev" 
                                    : 
                                    index === (Number(indexCard) + 1) ? "next" 
                                    : 
                                    Number(indexCard) === 0 ? "first" 
                                    :
                                    index === (listData.length -1 ) ? "last" 
                                    : ""
                                }
                                
                                isSelect={index === (indexCard) ? true : false}
                            />
                        ))
                    }
                </CarrouselMovies>
               
            </Container>
        </>
    );
}

export default Home;
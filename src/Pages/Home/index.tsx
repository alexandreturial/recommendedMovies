import React,{ useEffect, useState } from 'react';
import CardMovie from '../../Components/CardMovie';
import CarrouselMovies from '../../Components/CarrouselMovies';
import Description from '../../Components/DescriptionMovie';
import Head from '../../Components/Head';

import { useCarousel } from '../../Hooks/MoveSelectShow';

import { Container } from './styles';


const Home: React.FC = () => {
    const { indexCard } = useCarousel();

    return (
        <Container image={movies[Number(indexCard)].backdrop_path}>
            <Head/>
            <Description 
                Name={movies[Number(indexCard)].title} 
                Description={movies[Number(indexCard)].overview}
            />
            <CarrouselMovies size={movies.length}>
                {
                    
                    movies.length > 0 &&
                    movies.map((movie, index) => (
                        <CardMovie
                            key={index}
                            image={movie.poster_path}
                            className={
                                index === (Number(indexCard) - 1) ? "prev" 
                                : 
                                index === (Number(indexCard) + 1) ? "next" 
                                : 
                                Number(indexCard) === 0 ? "first" 
                                : ""
                            }
                            
                            isSelect={index === (indexCard) ? true : false}
                        />
                    ))
                }
            </CarrouselMovies>
        </Container>
    );
}

export default Home;
import React, { HTMLAttributes } from 'react';

import { 
    Container,
    Poster,
} from './styles';

interface ICardMovie extends HTMLAttributes<HTMLDivElement>{
    image: string;
    isSelect: boolean;
}

const CardMovie: React.FC<ICardMovie> = ({
    image,
    isSelect,
    ...rest
}) => {

  return (
      <Container isSelect={isSelect}{...rest}>
         
          <Poster className="posters">
              <img src={'https://image.tmdb.org/t/p/w342'+image} alt=""/>
          </Poster>
      </Container>
  );
}

export default CardMovie;
import React from 'react';

import { Container } from './styles';

interface ICarrouselMovies{
    size: number
}

const CarrouselMovies: React.FC<ICarrouselMovies> = ({children, size}) => {

  return (
      <Container>
        <div className="carousel">
          {children}
        </div>
      </Container>
  );
}

export default CarrouselMovies;
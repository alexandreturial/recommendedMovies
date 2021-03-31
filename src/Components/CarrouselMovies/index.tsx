import React from 'react';
import { useCarousel } from '../../Hooks/MoveSelectShow';
import CardMovie from '../CardMovie';
import DescriptionMovie from '../DescriptionMovie';

import { Container } from './styles';

const CarrouselMovies: React.FC = () => {
  const { indexCard, listData } = useCarousel();
  return (
    <Container>
      <div className="carousel">
        <DescriptionMovie
          Name={listData.length > 0 ? listData[Number(indexCard)].title : ''}
          Description={listData.length > 0 ? listData[Number(indexCard)].overview : ''}
        />
        {

          listData.length > 0 &&
          listData.map((movie, index) => {
            return (
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
                        index === (listData.length - 1) ? "last"
                          : ""
                }

                isSelect={index === (indexCard) ? true : false}
              />
            )
          })
        }
      </div>
    </Container>
  );
}

export default CarrouselMovies;
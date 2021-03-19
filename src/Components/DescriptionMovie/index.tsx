import React from 'react';
import { useCarousel } from '../../Hooks/MoveSelectShow';

import { Container, Buttons } from './styled';

import {
    RiArrowLeftSLine,
    RiArrowRightSLine
} from 'react-icons/ri';

interface IDescriptionMovieProps{
    Name: string;
    Description: string
}

const DescriptionMovie: React.FC<IDescriptionMovieProps> = ({
    Name,
    Description
}) => {
  const { nextCard, previousCard, indexCard, listData } = useCarousel();


  return (
      <Container>
            <div>
                <h1>{Name}</h1>
                <p>{Description}</p>
            </div>
            <Buttons>
                <button 
                type="button" 
                onClick={() => previousCard()}
                className={indexCard === 0 ? 'not-move' : ''}
                >
                    <RiArrowLeftSLine size={35}/>
                </button>
                <button 
                onClick={() => nextCard()} 
                className={indexCard === (listData.length -1) ? 'not-move' : ''}
                >
                    <RiArrowRightSLine size={35}/>
                </button>
            </Buttons>
      </Container>
  );
}

export default DescriptionMovie;
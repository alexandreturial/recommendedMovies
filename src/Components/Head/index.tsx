import React from 'react';
import { useCarousel } from '../../Hooks/MoveSelectShow';

import { 
  Container, 
  Logo,
  Options,
  Option
} from './styles';

const Head: React.FC = () => {
  const{ changeSearch, isMovie } = useCarousel();

  return (
    <Container>
        <Logo>Movies</Logo>
        <Options>
          <Option className={isMovie ? "is-select" : '' } onClick={() => changeSearch(0)}>
            <h3 >Movie</h3>
          </Option>
          <Option className={isMovie ? "" : 'is-select' } onClick={() => changeSearch(1)}>
            <h3>Serie</h3>
          </Option>
        </Options>
    </Container>
  );
}

export default Head;
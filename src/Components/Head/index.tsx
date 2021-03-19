import React from 'react';

import { 
  Container, 
  Logo,
  Options 
} from './styles';

const Head: React.FC = () => {
  return (
    <Container>
        <Logo>Movies</Logo>
        <Options>
          <h3>Movie</h3>
          <h3>Serie</h3>
        </Options>
    </Container>
  );
}

export default Head;
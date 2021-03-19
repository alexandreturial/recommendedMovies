import React from 'react';

import { 
  Container, 
  Logo,
  Options,
  Option
} from './styles';

const Head: React.FC = () => {
  return (
    <Container>
        <Logo>Movies</Logo>
        <Options>
          <Option className="is-select">
            <h3 >Movie</h3>
          </Option>
          <Option>
            <h3>Serie</h3>
          </Option>
        </Options>
    </Container>
  );
}

export default Head;
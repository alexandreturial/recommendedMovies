import React, { useState } from 'react';
import { useCarousel } from '../../Hooks/MoveSelectShow';

import { 
  Container, 
  Logo,
  Options,
  Option,
  Search,
  Input
} from './styles';


import {
  RiSearch2Line,
} from 'react-icons/ri';


const Head: React.FC = () => {
  const [navPositionScroll, setNavPositionScroll] =useState(0);
  const{ changeSearch, isMovie, search } = useCarousel();

  const handleSearch = (e: string ) => {
    search(e)
  }

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    setNavPositionScroll(document.documentElement.scrollTop );
    
  }

  return (
    <Container scrollPosition={navPositionScroll}>
        <Logo>Movies</Logo>
        <Options>

          <Search>
            <label htmlFor="search">
              <RiSearch2Line />
            </label> 
            <Input type="text" autoComplete="off" name="search" id="search" placeholder="Search.." 
            onChange={
              (e) => setTimeout(() => {
                handleSearch(e.target.value)
            }, 2000)
            
            }
            />
          </Search>
           
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
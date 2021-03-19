import styled, { css } from 'styled-components';

interface IContainer{
  isSelect: boolean;
}


export const Container = styled.section<IContainer>`
  
  flex: none; 
  display: flex;
  align-content: center;
  margin: 0;
  
  .posters > img{
    ${props => props.isSelect && css`
      width: auto;
      height: 525px;
    ` }
  }

  
  
`;

export const Poster = styled.div`
  img{
    width:  220px;
    height: 325px;

    border-radius: 10px;
  }
`;

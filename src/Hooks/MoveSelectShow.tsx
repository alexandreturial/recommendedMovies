import React, { createContext, useState, useContext, useEffect } from 'react';
import router from '../Services/movieApi';


interface ICarouselContext{
    indexCard: Number;
    nextCard(): void;
    previousCard(): void;
    listData: Array<IMovies>
}

interface IMovies{
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    title: string;
    video: Boolean;
}

const CarouselContext = createContext<ICarouselContext>({} as ICarouselContext);

const CarouselProvider: React.FC = ({ children }) => {
    
    const [indexCard, setIndexCard] = useState(0);
    const [listData, setMovies] = useState([{} as IMovies]);
  
    useEffect(() =>{
        router.getAllMovies().then((comics) =>{
            setMovies(comics.data.results);
        }).catch((err) =>{
            return {
                data:{
                    result:{
                        error: err
                    }
                }
            }
        });
        
    }, []);
    
    useEffect(() => {
        const el = document.querySelector('.carousel');
          if(el !== null){
            el.scrollTo(220 * Number(indexCard), 0);
          }
    }, [indexCard])

    const nextCard = () => {
        
        if(indexCard + 1 <= (listData.length -1) ){
            setIndexCard(indexCard + 1)
        }
       
    }

    const previousCard = () =>{
        if(indexCard - 1 >= 0){
            setIndexCard(indexCard - 1)
        }
    }
    return (
        <CarouselContext.Provider value={{listData, indexCard, nextCard, previousCard}}>
            {children}
        </CarouselContext.Provider>
    )
}

function useCarousel(): ICarouselContext{
    const context = useContext(CarouselContext);
    return context;
}

export { CarouselProvider, useCarousel };
import React, { createContext, useState, useContext, useEffect } from 'react';
import router from '../Services/movieApi';


interface ICarouselContext{
    indexCard: Number;
    isMovie: boolean;
    nextCard(): void;
    previousCard(): void;
    changeSearch(option: Number): void;
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
    const [isMovie, setIsMovie] = useState(true);
    const [listData, setMovies] = useState([{} as IMovies]);
  
    useEffect(() =>{
        if(isMovie){
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
        }else{
            router.getAllSeries().then((comics) =>{
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
        }
       
        
    }, [isMovie]);
    
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

    const changeSearch = (option: Number) =>{
        //movies -> 0
        // seies -> 1
        console.log(option);
        if(option !== 0){
            setIsMovie(false);
        }else{
            setIsMovie(true);
        }
    }

    return (
        <CarouselContext.Provider value={{listData, indexCard, nextCard, previousCard, changeSearch, isMovie}}>
            {children}
        </CarouselContext.Provider>
    )
}

function useCarousel(): ICarouselContext{
    const context = useContext(CarouselContext);
    return context;
}

export { CarouselProvider, useCarousel };
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import router from '../Services/movieApi';


interface ICarouselContext{
    indexCard: Number;
    isMovie: boolean;
    nextCard(): void;
    previousCard(): void;
    changeSearch(option: Number): void;
    listData: Array<IMovies>;
    search(name: string): void;
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
    const [listData, setMovies] = useState([]);
    const [nameMovie, setNameMovie] = useState('');

    useEffect(() =>{
        if(isMovie){
            router.getAllMovies(nameMovie).then((comics) =>{
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
            router.getAllSeries(nameMovie).then((comics) =>{
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
       
        
    }, [isMovie, nameMovie]);
    
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

    const changeSearch = useCallback(
        (option: Number) =>{
            //movies -> 0
            // seies -> 1
            
            if(option !== 0){
                setIsMovie(false);
            }else{
                setIsMovie(true);
            }
            setIndexCard(0);
        },
        [],
    );
    const search = useCallback(
        (name: string) =>{
            setNameMovie(name);
            setIndexCard(0);
        },
        [],
    );
    return (
        <CarouselContext.Provider value={
            {search, 
            listData, 
            indexCard, 
            nextCard, 
            previousCard, 
            changeSearch, 
            isMovie}
        }>
            {children}
        </CarouselContext.Provider>
    )
}

function useCarousel(): ICarouselContext{
    const context = useContext(CarouselContext);
    return context;
}

export { CarouselProvider, useCarousel };
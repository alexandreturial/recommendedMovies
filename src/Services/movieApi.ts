import axios from 'axios';

const urlBase = 'https://api.themoviedb.org/3/';
const apiKey = 'ece5778e13c936b98163c3e58e4e11a3';

export default {
    //lista todos filmes
    getAllMovies: () => {
        const urlComics = urlBase + 'search/movie?api_key=' + apiKey + '&query=harry Potter&language=pt-br';
        
        return axios.get(urlComics);
    },
    //lista todas series
    getAllSeries: () => {
        const urlComics = urlBase + 'search/tv?api_key=' + apiKey + '&query=lost&language=pt-br';
        
        return axios.get(urlComics);
    }
}
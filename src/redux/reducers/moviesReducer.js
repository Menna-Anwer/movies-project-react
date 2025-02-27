
import { allMovies } from '../types/movieTyps';

const initialValue = {movies:[],pageCounr:0}
export const moviesReducer =(state=initialValue , action)=>{
    switch (action.type) {
        case allMovies:
            return{movies:action.data , pagecount:action.page }
        default:
            return state;
    }
}
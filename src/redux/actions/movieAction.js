import axios from "axios";
import { allMovies, api } from "../types/movieTyps"

 export const getAllMovies = ()=>{
    return async(dispatch)=>{
        const res =  await axios.get(api);
        dispatch ({type:allMovies,data:res.data.results ,page:0})
    }
   
}
export const getSearchMovie = (word)=>{
    return async(dispatch)=>{
        const res =  await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`);
        dispatch ({type:allMovies,data:res.data.results ,page:0})
    }
   
}
import React, { createContext, ReactNode } from "react";

interface MovieContextProps {
    children:ReactNode
}
interface MovieState {
    movies:MovieDataType[];
}
interface MovieAction {
    type: string,
    id:string
}
const MovieList: MovieDataType[] = moviesData;
const initialMovieState: MovieState = {
    movies:MovieList
}
export const MovieContext = createContext<{
    state:MovieState,
    dispatch:React.Dispatch<MovieAction>
}>(
    state:initialMovieState,
    dispatch:() => ()
    
)


export const MovieProvider = ({children}: MovieContextProps)
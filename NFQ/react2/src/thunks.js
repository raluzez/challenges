import axios from 'axios';
import * as actions from './actions';
import { endpoints } from './config';

export const getMovies = () => dispatch => {
  dispatch(actions.fetchMoviesStart());
  axios
    .get(endpoints.mostPopularMovies())
    .then((data) => {
      dispatch(actions.setMostPopularMovies(data.data.results));
    })
};

export const getMoviesByGenre = (selectedGenre) => dispatch => {
  dispatch(actions.fetchMoviesStart());
  axios
    .get(endpoints.genreMovies(selectedGenre))
    .then((data) => {
      dispatch(actions.setMoviesByGenre(data.data.results));
    })
}

export const getMoviesGenres = () => dispatch => {
  axios
    .get(endpoints.genres())
    .then( response => {
      dispatch(actions.setMoviesGenres(response.data.genres));
    });
};

export const likeClicked = (movieId, likedList, movieName) =>dispatch => {
  if (likedList.find(id => id === movieId)) {
    dispatch (actions.removeFromLikedList(movieId)) 
    dispatch (actions.unliked(movieName))
  } else {
    dispatch (actions.addToLikedList(movieId))
    dispatch (actions.liked(movieName))
  }      
}

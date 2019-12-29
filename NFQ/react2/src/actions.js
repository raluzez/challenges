export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setMoviesByGenre = list => ({
  type: 'SET_MOVIES_BY_GENRE',
  list,
})

export const setMoviesGenres = genres => ({
  type: 'SET_MOVIES_GENRES',
  genres,
})

export const fetchMoviesStart = () => ({
  type: 'FETCH_MOVIES_START',
})

export const addToLikedList = movieId => ({
  type: 'ADD_TO_LIKED_LIST',
  movieId
})

export const removeFromLikedList = movieId => ({
  type: 'REMOVE_FROM_LIKED_LIST',
  movieId
})

export const loaded = () => ({
  type: 'LOGS_LOADED'
})

export const genreChanged = genre => ({
  type: 'LOGS_GENRE_CHANGED',
  genre
})

export const liked = name => ({
  type: 'LOGS_LIKED',
  name
})

export const unliked = name => ({
  type: 'LOGS_UNLIKED',
  name
})
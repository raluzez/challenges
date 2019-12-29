import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  movies: [],
  genresList: [],
  loading: false
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      movies: action.list,
      loading: false
    };
    case 'SET_MOVIES_BY_GENRE': return {
      ...state,
      movies: action.list,
      loading: false
    }
    case 'SET_MOVIES_GENRES' : return {
      ...state,
      genresList: action.genres
    }
    case 'FETCH_MOVIES_START': return {
      ...state,
      loading: true
    }
    default: return state;
  }
};

const initialStateOfCard = {
  likedList: []
};

const card = (state = initialStateOfCard, action) => {
  switch (action.type) {
    case 'ADD_TO_LIKED_LIST': return {
      ...state,
      likedList: state.likedList.concat(action.movieId)
    }
    case 'REMOVE_FROM_LIKED_LIST': return {
      ...state,
      likedList: state.likedList.filter( id => id !== action.movieId)
    }
    default: return state;
  }
};

const initialStateOfLogs = {}

const logs = (state = initialStateOfLogs, action) => {
  const date = new Date().toISOString().replace('T', ' ').slice(0,-5);
  switch (action.type) {
    case 'LOGS_LOADED': 
      Object.assign(state, {[date]:'Aplikacija uzkrauta'})
      return state
    case 'LOGS_GENRE_CHANGED':
      Object.assign(state, {[date]:`Pakeistas zanras i ${action.genre}`})
      return state
    case 'LOGS_LIKED':
      Object.assign(state, {[date]:`Uzdeta sirdele filmui ${action.name}`})
      return state
    case 'LOGS_UNLIKED':
        Object.assign(state, {[date]:`Nuimta sirdele filmui ${action.name}`})
        return state
    default: return state;
  }
}

export const rootReducer = combineReducers({
  componentState,
  cards,
  card,
  logs
});

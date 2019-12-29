import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getMovies, getMoviesGenres, getMoviesByGenre } from '../thunks';
import Card from './Card';
import { getImageUrl } from '../config';

class App extends React.Component {
  componentDidMount() {
    this.props.onGetMovies();
    this.props.onGetMoviesGenres();
    this.props.onLoaded();
  }
  
  render() {
    return (
      <div className="container">
        <header>
          <button
            style={{margin: '10px', padding:"10px", backgroundColor:"#3D3434", border:"2px solid #3D3434", borderRadius:"4px", color:"white", width:'12.5%' }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
          <button 
            style={{padding:"10px", backgroundColor:"#3D3434", border:"2px solid #3D3434", borderRadius:"4px", color:"white", margin:"10px", width:'12.5%'}}
            onClick={() => {this.props.onGetMovies()
                            this.props.onGenreChanged('All')}}>
              All
          </button>
          {this.props.genresList.map( genre =>( 
          <button
            style={{padding:"10px", backgroundColor:"#3D3434", border:"2px solid #3D3434", borderRadius:"4px", color:"white", margin:"10px", width:'12.5%'}}
            key={genre.id}
            onClick={() => {this.props.onGetMoviesByGenre(genre.id);
                            this.props.onGenreChanged(genre.name);}}>
              {genre.name}
          </button>
          ))}
        </header>
        
        {this.props.showCards
          ? (this.props.loading //spot some unexpected behavior (if all list is not resumed some items from old list left. exp. "lion king" going from family genre to crime genre)
            ? null
            :<div className="cards">
              {this.props.movies.map((card) => (
                <Card
                  key={card.original_title}
                  backgroundImage={getImageUrl(card.backdrop_path)}
                  date={card.release_date}
                  rating={card.vote_average}
                  votes={card.vote_count}
                  description={card.overview}
                  title={card.original_title}
                  movieId={card.id}
                />
              ))}
            </div>
          )
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCards: state.componentState.showCards,
  movies: state.cards.movies,
  genresList: state.cards.genresList,
  loading: state.cards.loading
});
const mapDispatchToProps = (dispatch) => ({
  onToggleCards: (shouldShow) => dispatch(actions.toggleCards(shouldShow)),
  onGetMovies: () => dispatch(getMovies()),
  onGetMoviesGenres: () => dispatch(getMoviesGenres()),
  onGetMoviesByGenre: (genreId) => dispatch(getMoviesByGenre(genreId)),
  onLoaded: () => dispatch(actions.loaded()),
  onGenreChanged: (genreName) => dispatch(actions.genreChanged(genreName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

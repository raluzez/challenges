import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl } from '../config';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      list: [],
      genres: [], 
      moviesByGenre: [],
      showByGenre:false,
      liked: []
    };
  }
  componentDidMount() {
    axios
      .get(endpoints.mostPopularMovies())
      .then((data) => {
        this.setState({
          list: data.data.results
        });
      });
    axios
      .get(endpoints.genres())
      .then (response => {
        this.setState({
          genres: response.data.genres
        })
      })
  }
  
  getTitle = (title) => {
    console.log(title);
  };

  getMoviesByGenreHandler = (genreId) =>{
    axios
      .get(endpoints.genreMovies(genreId))
      .then (response => {
        this.setState({
          moviesByGenre: response.data.results,
          showByGenre:true
        })
      })
  }

  showAllHandler = () => {
    this.setState({showByGenre:false})
  }

  toggleToLikedListHandler = (id) => {
    this.state.liked.find(movieId=>movieId === id) 
      ?this.setState({liked:this.state.liked.filter(likedMovieId=> likedMovieId !== id)})
      :this.setState({liked: this.state.liked.concat(id)});
  }

  checkLikedHandler = (id) => {
    return this.state.liked.find(likedMovieId => likedMovieId === id)
  }
  

  render() {
    return (
      <div>
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
          <button 
            style={{padding:"10px", backgroundColor:"#3D3434", border:"2px solid #3D3434", borderRadius:"4px", color:"white", margin:"10px"}}
            onClick={this.showAllHandler}>
              All
          </button>
          {this.state.genres.map( item =>( 
          <button
          style={{padding:"10px", backgroundColor:"#3D3434", border:"2px solid #3D3434", borderRadius:"4px", color:"white", margin:"10px"}}
            key={item.id}
            onClick={()=>{this.getMoviesByGenreHandler(item.id)}}>
              {item.name}
          </button>
          ))}
        </div> 
        {this.state.showByGenre 
        ? this.state.moviesByGenre.map( card =>(
          <Card
            getTitle={this.getTitle}
            key={card.original_title}
            backgroundImage={getImageUrl(card.backdrop_path)}
            date={card.release_date}
            rating={card.vote_average}
            votes={card.vote_count}
            description={card.overview}
            title={card.original_title}
            toggleToLiked={()=>this.toggleToLikedListHandler(card.id)}
            liked={this.checkLikedHandler(card.id)}
          />
        ))
        : this.state.list.map((card) => (
          <Card
            getTitle={this.getTitle}
            key={card.original_title}
            backgroundImage={getImageUrl(card.backdrop_path)}
            date={card.release_date}
            rating={card.vote_average}
            votes={card.vote_count}
            description={card.overview}
            title={card.original_title}
            toggleToLiked={()=>this.toggleToLikedListHandler(card.id)}
            liked={this.checkLikedHandler(card.id)}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React from 'react';
import { connect } from 'react-redux';
import { likeClicked } from '../thunks';

class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
    };
  }
  
  render() {
    const { showDescription } = this.state;
    const { title, backgroundImage, date, rating, votes, description, movieId } = this.props;
    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>
      
          <div className="card__like">
              <i  className={
                    this.props.likedList.find( id => id === movieId)
                      ? 'fa fa-heart'
                      : 'fa fa-heart-o'}
                  onClick={ () => (this.props.onLikeClicked(movieId, this.props.likedList, title))} />
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>
      
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  likedList: state.card.likedList
});
const mapDispatchToProps = (dispatch) => ({
  onLikeClicked: (movieId, likedList, movieName) => dispatch(likeClicked(movieId, likedList, movieName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

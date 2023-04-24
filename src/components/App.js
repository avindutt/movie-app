import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MoviesCard';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
  componentDidMount () {
    const {store} = this.props;

    //subscribe function is called automatically after dispatch function is called
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    //make an api call
    //dispatch action
    store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }
  
  render() {
    const {movies} = this.props.store.getState(); // {movies: {}, search: {}}
  const {list, favourites, showFavourites} = movies;  
  console.log('RENDER', this.props.store.getState());

  const display = showFavourites? favourites : list;
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <div className='tabs'>
         <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)} >Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
      </div>

        <div className='list'>
          {display.map((movie, index) => (
            <MovieCard 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isMovieFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
        {display.length === 0 ? <div className='no-movies'>No movies to display</div> : null }
      </div>
    </div>
  );
  }
}

export default App;
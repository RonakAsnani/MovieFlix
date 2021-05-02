import React from 'react';
import {connect} from 'react-redux';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setFavourite} from '../actions';
// import {connect} from '../index';




class App extends React.Component {
  componentDidMount(){
    
    // make api call
    // dispatch actions
    this.props.dispatch(addMovies(data))

     //console.log(this.props);
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props;


    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      // found the movie
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.dispatch(setFavourite(val));
  }
  render(){
    const {movies, search} = this.props;
  const {list, favourites, setFavourites} = movies; //{movies: {},search:{}}
   // console.log(favourites);
  
    const displayMovies= setFavourites ? favourites : list
  return (
    <div className="App">
      <Navbar search={search} />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${setFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${setFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list ">
            {displayMovies.map((movie,index) => (
              <MovieCard 
              movie={movie} key={`movies-${index}`} 
              dispatch={this.props.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
        </div>
              {displayMovies.length === 0 ? <div className="no-movies">No movies to display</div> : ''}
      </div>
    </div>
  );
}
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => 
//           <App store={store}/>
//         }
//       </StoreContext.Consumer>
//     )
//   }
// }

// export default AppWrapper;
function mapStateToProps(state){ 
  return {
    movies: state.movies,
    search: state.movies
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;

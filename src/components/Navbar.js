import React from 'react';
import {connect} from 'react-redux';
// import { connect} from '..';
import {addMovieToList, handleMovieSearch} from '../actions';



class Navbar extends React.Component {


    constructor(props){
        super(props);
            this.state = {
               
                searchText: ''
            }
        
    }

    handleAddMovies = (movie) => {
    
       // console.log('ooo',this.props);
        this.props.dispatch(addMovieToList(movie));
        this.setState ({
            showSearchResults: false
        })
    }
    
    handleSearch = () => {

        const { searchText } = this.state;
       // console.log(this.props);
        this.props.dispatch(handleMovieSearch(searchText));
      };
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render(){
   
        const {result:movie, showSearchResults} = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button onClick={this.handleSearch} id="search-btn">Search</button>

                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search pic"/>
                                <div className="movie-info">
                                    <span>{movie.Title}</span>
                                    <button className="favourite-btn" onClick={() => this.handleAddMovies(movie)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
          );
    }
  
}

// class NavbarWrapper extends React.Component{
//     render(){
//         return (
//             <StoreContext.Consumer>
//                 {(store) => 
//                     <Navbar search={this.props.search} dispatch={store.dispatch} />
//                 }
//             </StoreContext.Consumer>
//         )
//     }
// }

// export default NavbarWrapper;

function mapStateToProps(state){
    return {
        search: state.search
    }
}

export default connect(mapStateToProps)(Navbar);
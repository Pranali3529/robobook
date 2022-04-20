import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import './App.css';
import { requestRobots, setSearchfield } from '../action';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
      searchField: state.searchRobots.searchField,
      isPending: state.requestRobots.isPending,
      robots: state.requestRobots.robots,
      error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

 function App({ searchField, onSearchChange, onRequestRobots, robots, isPending }) { 
  
  // const [ robots, setrobots] = useState([]);
  

  useEffect(() => { 
    onRequestRobots(); //with redux-thunk
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {setrobots(users)});
   }, [onRequestRobots]);



    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
    <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
       
          <Scroll>
            { isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
               <CardList robots={filteredRobots} />
            </ErrorBoundary>
            }
          </Scroll> 
        </div>
      );
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
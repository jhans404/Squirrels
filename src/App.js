import React from 'react';
import './App.css';
import Squirrel from './Components/Squirrel.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squirrels: []
    }
  }
  
  // add a componentDidMount lifecycle method to fetch data from the API
  componentDidMount = () => {
    let appToken = 'LKfpgQd43jD3rZTdID2RCq4oK';
    fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token='+appToken+'&running=true')
      .then(response => response.json()) // convert response to JSON
      .then(data => {
          this.setState(state => {
              state.squirrels = data
              return state
          })
      })
      .catch(e => {
        alert(e);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <h2>{this.state.squirrels.length}</h2>
        
        {this.state.squirrels.map(squirrel => {
          return <Squirrel name = {squirrel.unique_squirrel_id} 
                           age = {squirrel.age} 
                           color = {squirrel.primary_fur_color} 
                           running = {squirrel.running} 
                  />
          })
        }
      </div>
    );
  }
}

export default App;

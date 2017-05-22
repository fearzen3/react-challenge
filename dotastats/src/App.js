import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListHeroes from './listHeroes'

class App extends Component {

 constructor(props){
  super(props)
  this.state={
    heroes : []
  }
 }
  
  componentWillMount(){
    let self = this
  axios.get('https://api.opendota.com/api/heroStats')
  .then(function (response) {
    self.setState({heroes : response.data})
   
  })
  .catch(function (error) {
    console.log(error);
  });
}


  render() {

    return (
      <ListHeroes  heros={this.state.heroes}/>
    )
  }

  componentDidMount(){

}
}

export default App;

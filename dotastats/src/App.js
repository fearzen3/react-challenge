import React, { Component } from 'react';
import axios from 'axios';
import './App.css';





const heroes = []


class App extends Component {
  
  
  componentWillMount(){
    console.log('1')
    let self = this
  axios.get('https://api.opendota.com/api/heroStats')
  .then(function (response) {
    // console.log(response);
    self.heroes = response.data;
    // console.log(self.heroes)
  })
  .catch(function (error) {
    console.log(error);
  });
}


  render() {
    console.log('2')
    console.log(heroes)
    return (
      <ul>
        {heroes.map((hero)=>{
          return(
            <li> {hero.localized_name} {hero.primary_attr} {hero.attack_type} {hero.localized_name}</li>
          )
        })
        }
        </ul>
    )
  }

  componentDidMount(){
console.log('3')

}
}

export default App;

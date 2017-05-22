import React, { Component } from 'react';



class listHeroes extends Component {
    
  render() {
    return (
      <ul>
        {this.props.heros.map((hero,index)=>{
          return(

            <li key={index}> {hero.localized_name} {hero.primary_attr} {hero.attack_type}</li>
          )
        })
        }
        </ul>
    )
  }


}

export default listHeroes;

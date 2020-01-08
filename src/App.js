import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card.list.component';
// import { promised } from '../node_modules/@types/q';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[]
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }

  render() {
    return ( 
     <CardList monsters={this.state.monsters} />
  )
  }

}

export default App;

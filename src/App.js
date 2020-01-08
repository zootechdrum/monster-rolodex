import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card.list.component';
import { promised } from '../node_modules/@types/q';

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
    return className="App">
     <CardList name={yuha}></CardList>
     {this.state.monsters.map(monster => (
       <h1 key={promised.id}>{monser.name}</h1>
     ))}
  }

}

export default App;

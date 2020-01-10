import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card.list.component';
// import { promised } from '../node_modules/@types/q';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField:''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return ( 
    <div>
      <input type='search' placeholder='search monsters' 
        onChange={e => this.setState({searchField: e.target.value})} />
      <CardList monsters={filteredMonster} />
     </div>
  )
  }

}

export default App;

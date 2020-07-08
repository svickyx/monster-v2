import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/cardlist/cardlist.component';
import {SearchBox} from './components/search-box/search-box';

class App extends Component {
  constructor(){
     super();
 
     this.state = {
       monsters: [ ],
       searchField: ''
      };
    
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({monsters: users})
    })
  }

  handleChange = (e)=> {
    this.setState({searchField: e.target.value})
  }

  // handleChange(e) {
  //   this.setState({searchField: e.target.value})
  // }

     render(){
      const {monsters, searchField} = this.state;
      const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
         return (
          <div className = 'App'>
            <h1>Monster Rolodex</h1>
            <SearchBox 
              placeholder =  'search monster'
              handleChange = {this.handleChange}
            />
            <CardList monsters={filterMonster} />
           </div>
         );
     }
 }

export default App;

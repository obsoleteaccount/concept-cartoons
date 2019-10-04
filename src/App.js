import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

import {SearchBox} from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();//calls constructor on component class to give access to this.state i.e calls React.Component's constructor()

    this.state = {
      paintings: [],//passed to the CardList component below as an attribute. The component receives it as prop
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ paintings: users }));
      
     }

    // handleChange(e) {
    //     this.setState({searchField: e.target.value});
    // } 
    handleChange = (e) => {
      this.setState({ searchField: e.target.value });
    }

  render() {
    const { paintings, searchField } = this.state;
    const filteredPaintings = paintings.filter(painting => 
      painting.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
          <h1>Concept Cartoons</h1>
           <SearchBox
             placeholder='search paintings' 
             handleChange={ this.handleChange }
           />
          <CardList paintings={filteredPaintings} />          
      </div>
    );
  }
}

export default App;

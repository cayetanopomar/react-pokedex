import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader';

class  App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'Greg'
    }
    
  }
  render() {
    return (
      <div className="App">
        <PokedexHeader 
        author={'@atypical.engineer'}  
        name={this.state.name} />
      </div>
    );
  }
}

export default App;

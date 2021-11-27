import './App.css';
import PokedexHeader from './components/PokedexHeader';
import {useState} from 'react'

function App() {
  const [pokedexName, setPokedexname] = useState('Greg');
  return (
    <div className="App">
      <PokedexHeader 
      author={'@atypical.engineer'}  
      name={pokedexName} 
      />
    </div>
  );
}

export default App;

import { useState } from 'react';
import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import { Character } from './components/Character';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async()=> {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    setCharacters(characterApi.results)   
  }
 
  return (
    <>
      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ) : (
          <div>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <div>
              <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
            </div>
          </div>         
        )}   
      </header>
    </>
  )
}

export default App

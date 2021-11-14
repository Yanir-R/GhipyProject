import React from 'react'
import './App.css';
import { Gif } from './components/Gif';
import { GiphySearch } from './components/GiphySearch';


export const App: React.FC = () => {
  return <>
    <div>
      <div className="searchBar">
        <GiphySearch />
      </div>
    </div>
  </>
}

export default App;


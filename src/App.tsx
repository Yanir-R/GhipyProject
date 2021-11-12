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
      <Gif url={"https://giphy.com/embed/GFLIjIaiAL0kw"} />
    </div>
  </>
}

export default App;


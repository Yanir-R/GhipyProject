import React from 'react'
import './App.css';
import { BazingaLogo } from './components/bazingaLogo';
import { Search } from './components/Search';
import { StickerCard } from './components/stickerCard';



function App() {

  return <>
    <div>
      <header >
        Header
      </header>
      <BazingaLogo />
      <div className="searchBar">
        <Search />
        <StickerCard />
      </div>
    </div>
  </>
}

export default App;
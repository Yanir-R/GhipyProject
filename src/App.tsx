import React, { useState } from 'react'
import './App.css';
import { BazingaLogo } from './components/bazingaLogo';
import { Search } from './components/Search';
import { StickerCard } from './components/stickerCard';
import { StickyCardList } from './components/stickyCardList';
import { Sticker } from './react-app-env'


export const App: React.FC = () => {
  const [data, setData] = useState<Sticker[]>([])

  return <>
  
    <div>
      <header >
        Header
      </header>
      <BazingaLogo />
      <div className="searchBar">
        <Search />
        <StickyCardList />

      </div>
    </div>
  </>
}

export default App;


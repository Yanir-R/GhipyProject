
import React from 'react'
import './App.css';
import { BazingaLogo } from './components/bazingaLogo';
import { Search } from './components/Search';



function App() {

  return <>
    <div>
      <header >
        Header
      </header>
      <BazingaLogo />
      <div className="searchBar">
      <Search/>
      </div>
    </div>
  </>
}

export default App;


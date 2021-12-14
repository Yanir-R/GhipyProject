
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GifDetails } from './components/GifDetails';
import { GifList } from './components/GifList';
import Paginate from './components/Paginate';
import { Search } from './components/Search';
import { GiphySearchAPI } from './GiphySearchAPI';

export const App: React.FC<any> = ({ currentPage }) => {



    return (
        <Router>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }} >
                    Home
                </Link>

            </nav>

            <Routes>
                <Route path={'/'} element={<GiphySearchAPI />} />
                <Route path={`/`} element={<Search />} />
                <Route path={`/${currentPage + 1}`} element={<Paginate />} />
                <Route path={'gif/:id'} element={<GifDetails />} />
                <Route path={`/`} element={<GifList />} />
            </Routes>
        </Router>

    );
}
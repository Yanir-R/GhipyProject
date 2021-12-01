
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GifDetails } from './components/GifDetails';
import { GifList } from './components/GifList';
import Paginate from './components/Paginate';
import { Search } from './components/Search';
import { GiphySearchAPI } from './GiphySearchAPI';

export const App: React.FC<any> = ({ gifs, currentPage }) => {



    return (
        <Router>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }} >
                    Home
                </Link>
                <Link to={':id'} style={{ padding: 5 }} >
                    Details
                </Link>
            </nav>



            <Routes>
                <Route path={'/'} element={<GiphySearchAPI />} />
                <Route path={`/`} element={<Search />} />
                <Route path={`/${currentPage + 1}`} element={<Paginate />} />
                <Route path={':id'} element={<GifDetails />} />
                <Route path={`/`} element={<GifList data={gifs} />} />


            </Routes>
        </Router>

    );
}

// let element = useRoutes([
//     { index: true, element: <GiphySearchAPI /> },
//     {
//         path: '/',
//         element: <Gif url={gifs} />,
//         children: [
//             { path: '/', element: <Search /> },
//             { path: '/gifDetails', element: <GifDetails /> },
//             { path: '/gifList', element: <GifList /> },
//             { path: `/pageNumber=${currentPage}`, element: <Paginate /> },

//         ]

//     }
// ])
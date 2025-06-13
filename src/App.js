import './css/App.css';
import './css/globals.css';

import Banner from './components/Banner';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Book from './components/Book';

const name = 'Game Tutor';

function App() {
    return(
        <>
            <BrowserRouter>
                <ErrorBoundary fallback="An error has occurred. For the static site, please visit this page: ">
                    <Banner headerText={name} subHeaderText="Begin your game dev journey today!"/>
                </ErrorBoundary>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="service/:id" element={<Service />} />
                    <Route path="book" element={<Book />} />
                    <Route path="about" element={<About />} />
                    {/* Add more routes as needed */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

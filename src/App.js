import './css/App.css';
import './css/globals.css';

import ErrorBoundary from './components/ErrorBoundary';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Book from './components/Book';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const name = 'Game Tutor';

function App() {
    return(
        <>
            <ErrorBoundary fallback="An error has occurred. For the static site, please visit this page: ">
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="service/:id" element={<Service />} />
                        <Route path="book" element={<Book />} />
                        <Route path="about" element={<About />} />
                        {/* Add more routes as needed */}
                    </Routes>
                    <Footer copyright={name} />
                </div>
            </ErrorBoundary>
        </>
    );
}

export default App;

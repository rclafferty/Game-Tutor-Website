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
import JumpToTopButton from './components/JumpToTop';
import Services from './components/Services';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Error404 from './components/Error404';

import CompanyJSON from './json/CompanyInfo.json'

function App() {
    return(
        <>
            <ErrorBoundary fallback="An error has occurred. For the static site, please visit this page: ">
                <NavBar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="services" element={<Services />} />
                        <Route path="services/:id" element={<Service />} />
                        <Route path={CompanyJSON.privacyPolicy.policyUrl} element={<PrivacyPolicy />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="book" element={<Book />} />
                        <Route path="about" element={<About />} />

                        {/* Add more routes as needed */}
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    <JumpToTopButton />
                <Footer />
            </ErrorBoundary>
        </>
    );
}

export default App;

// App comp can have JS, JSX and CSS (optional)
// ideal place for your layout
/*
  imports (optional)
  comp defintion
  export
*/

// imports
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import HocDemoPage from './pages/HocDemoPage/HocDemoPage';

// Comp definition
function App () {
  // must return JSX
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div>
          <Header></Header>

          <main className="container mt-5 pt-3">
            <ErrorBoundary>
              {/* Let's config the routing here */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="hoc-demo" element={<HocDemoPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
              </Routes>
            </ErrorBoundary>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

// export
export default App;

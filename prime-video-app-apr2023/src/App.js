// App comp can have JS, JSX and CSS (optional)
// ideal place for your layout
/* 
  imports (optional)
  comp defintion
  export 
*/

// imports 
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';

// Comp definition
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <div>
        <Header></Header>

        <main className="container mt-5 pt-3">
          {/* Let's config the routing here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

// export
export default App;

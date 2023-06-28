// App comp can have JS, JSX and CSS (optional)
// ideal place for your layout
/*
  imports (optional)
  comp defintion
  export
*/

// imports
import './App.css';
import { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import HocDemoPage from './pages/HocDemoPage/HocDemoPage';
import HooksDemoPage from './pages/HooksDemoPage/HooksDemoPage';
import { PageContext } from './contexts/PageContext';
import ShopPage from './pages/ShopPage/ShopPage';
import { CartContext } from './contexts/CartContext';
import cartReducer from './reducers/cartReducer';

// Comp definition
function App () {
  // want to pass the following data via the context created
  const userStatus = {
    isLoggedIn: true,
    lastLogin: new Date()
  }

  const [cartState, cartDispatch] = useReducer(cartReducer);

  const cart = {
    cartState, // needed for Header comp
    cartDispatch // needed for ShopPage comp
  }

  // must return JSX
  return (
    <ErrorBoundary>
      <CartContext.Provider value={cart}>
        <BrowserRouter>
          <div>
            <Header></Header>

            <main className="container mt-5 pt-3">
              <ErrorBoundary>
                {/* Step 2 of Context API: providing data thru the created context */}
                <PageContext.Provider value={userStatus}>
                  {/* Let's config the routing here */}
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="hoc-demo" element={<HocDemoPage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/hooks-demo" element={<HooksDemoPage />} />
                    <Route path="/shop" element={<ShopPage />} />
                  </Routes>
                </PageContext.Provider>
              </ErrorBoundary>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </CartContext.Provider>
    </ErrorBoundary>
  );
}

// export
export default App;

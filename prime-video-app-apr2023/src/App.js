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
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import cartReducer from './reducers/cartReducer';
import AppRoutes from './routes/AppRoutes/AppRoutes';

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
              <p>Success</p>
              <ErrorBoundary>
                {/* Step 2 of Context API: providing data thru the created context */}
                <PageContext.Provider value={userStatus}>
                  <AppRoutes />
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

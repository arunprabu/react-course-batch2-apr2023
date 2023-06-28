// Functional Component with Named Function

// fn defn
// must return jsx
// export

import { useContext } from 'react';
import MenuList from '../MenuList/MenuList';
import { CartContext } from '../../contexts/CartContext';

function Header () {
  const cart = useContext(CartContext);
  console.log(cart);

  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Prime Video App!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button type="button" className="btn btn-danger">
              Cart ({cart.cartState?.length})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

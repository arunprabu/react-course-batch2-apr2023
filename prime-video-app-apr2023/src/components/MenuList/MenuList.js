// Functional Component with Arrow Function

import { Link } from 'react-router-dom';

// fn defn
// must return jsx
// export

const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hoc-demo">
          Hoc Demo
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;

// Functional Component with Anonymous Function

/*
 * imports (optional)
 * comp defn
 * must return JSX
 * export
 */

import MenuList from '../MenuList/MenuList';

const Footer = function () {
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright 2023 | Arun</p>
    </footer>
  );
};

export default Footer;

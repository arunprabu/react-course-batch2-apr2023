// App comp can have JS, JSX and CSS (optional)
// ideal place for your layout
/* 
  imports (optional)
  comp defintion
  export 
*/

// imports 
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

// Comp definition
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>

      <main className="container mt-5">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

// export
export default App;

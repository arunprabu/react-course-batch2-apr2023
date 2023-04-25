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

// Comp definition
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>

      <main className='mt-5'>
        <h1>Success!</h1>
      </main>

      <Footer />
    </div>
  );
}

// export
export default App;

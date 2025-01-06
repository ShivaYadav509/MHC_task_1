import logo from './logo.svg';
import './App.css';
import Header from './header';
import Presentation from './presentation';
import Product from './product';
import Testimonials from './testimonials';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Presentation/>
      <Product/>
       <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

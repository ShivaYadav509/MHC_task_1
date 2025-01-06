import logo from './logo.svg';
import './header.css';
function Header() {
  return (
    <div className="header">
      <a>logo</a>
      <div class ="components">
        <a href="#presentations">Presentations</a>
        <a href ="#products">Products</a>
        <a href="testmonials">Testmonials</a>
        <a href="footer">footer</a>
      </div>
    </div>
  );
}

export default Header;

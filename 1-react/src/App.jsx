import React from "react";
import Button from "./components/Button";
import ProductItem from "./components/ProductItem";

const App = () => (
  <div className="ProductPage">
    <div className="Page">
      <header>
        <h1>메뉴목록</h1>
      </header>
      <main>
        <ul>
          <li>
            <ProductItem />
          </li>
        </ul>
      </main>
      <footer>
        <nav className="Navbar">
          <a className="active" href="#">
            메뉴목록
          </a>
          <a href="#">주문내역</a>
        </nav>
      </footer>
    </div>
  </div>
);

export default App;

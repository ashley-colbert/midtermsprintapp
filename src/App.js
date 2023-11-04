// Written by Jay Eagles and Ashley Colbert
// Written on November 4, 2023

import { Outlet, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '15px',
  fontSize: '20pt'
};

function App() {
  return (
    <>
    <header>
    <nav>
      <Link style={linkStyle} to="/" className="nav-link">Home</Link>
      <Link style={linkStyle} to="/menu" >Menu</Link>
      <Link style={linkStyle} to="/order" >Order Online</Link>
    </nav>
    </header>
    <caption id="headCap">Photo by <a href="https://unsplash.com/@dayanaranacion?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dayanara Nacion</a> on <a href="https://unsplash.com/photos/red-leather-bench-inside-room-HuIJUp6gTDI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </caption>
    <Outlet />
      <Routes>
        <Route path="/" element={<App />}></Route>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
      </Routes>
      </>
  );
  }

export default App;
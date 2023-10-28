import { Outlet, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  text: '30pt',
  padding: '30px',
  fontSize: '30pt'
};

function App() {
  return (
    <>
    <header className='header'>
    <nav>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/menu" style={linkStyle}>Menu</Link>
      <Link to="/order" style={linkStyle}>Order Online</Link>
    </nav>
    </header>
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
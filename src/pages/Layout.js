import { Outlet, Link } from "react-router-dom";

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  text: '30pt',
  padding: '30px',
  fontSize: '30pt'
};

const Layout = () => {
  return (
    <>
    <header className='header'>
      <nav>
        <span className="link">
            <Link to="/" style={linkStyle}>Home</Link>
            </span>
            
          <span className="link">
            <Link to="/menu" style={linkStyle}>Menu</Link>
            </span>
          <span className="link">
            <Link to="/order" style={linkStyle}>Order Online</Link>
            </span>
      </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;
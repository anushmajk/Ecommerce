import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <Link className="navbar-brand fw-bold" to="/">
        JK Shopping
      </Link>
      <div className="d-flex gap-3">
        <Link to="/" className="text-decoration-none text-dark">
          Home
        </Link>
        <Link to="/cart" className="text-decoration-none text-dark">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

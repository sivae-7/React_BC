import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          meow
        </Link>
        <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;

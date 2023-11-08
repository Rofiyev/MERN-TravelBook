import { Navbar } from "flowbite-react";
import brand from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { navbarItem } from "../config";

function NavbarComponent() {
  const { pathname } = useLocation();

  return (
    <Navbar rounded>
      <Navbar.Brand>
        <Link to="/">
          <img src={brand} className="mr-3 h-20 sm:h-9" alt="Brand" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbarItem.map(({ name, route }) => (
          <Navbar.Link key={name} active={pathname === route}>
            <Link to={route}>{name}</Link>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

import "./navbar.scss";
import { useState } from "react";
import Logo from "../../assets/JUPIT Logo.png";
import { NavData } from "./NavData";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClose = () =>{
    setToggleMenu(false)
  }

  return (
    <nav>
      {toggleMenu ? <MobileNav handleClose={handleClose} />: null}
      <img src={Logo} alt="JUPIT LOGO" />
      <div className="nav__links">
        {NavData.map((nav) => (
          <NavLink key={nav.id} to={nav.link} className="nav__link">
            {nav.name}
          </NavLink>
        ))}
      </div>
      <div className="btn__group">
        <Button className="sign__in" text="Sign In" />
        <Button className="register" text="Register" />
      </div>

      <FiMenu onClick={handleToggle} className="menu__icon" />
    </nav>
  );
};

export default NavBar;

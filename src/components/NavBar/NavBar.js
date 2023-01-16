import "./navbar.scss";
import Logo from "../../assets/JUPIT Logo.png";
import { NavData } from "./NavData";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="JUPIT LOGO" />
      <div className="nav__links">
      {NavData.map((nav) => (
        <NavLink key={nav.id} to={nav.link} className="nav__link">
          {nav.name}
        </NavLink>
      ))}
      </div>
      <div  className="btn__group">
        <Button className='sign__in' text='Sign In' />
        <Button className='register' text='Register'  />
      </div>
    </nav>
  );
};

export default NavBar;

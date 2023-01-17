import "./mobilenav.scss";
import { NavData } from "./NavData";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = ({handleClose}) => {
  return (
    <nav className="mobile__nav">
      <div className="nav__links">
        {NavData.map((nav) => (
          <NavLink key={nav.id} to={nav.link} className="nav__link">
            {nav.name}
          </NavLink>
        ))}
      </div>
      <AiOutlineClose onClick={handleClose} className="close__icon"/>
    </nav>
  );
};

export default MobileNav;

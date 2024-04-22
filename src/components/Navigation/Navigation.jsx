import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <ul className={s.header}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        </li>

        <li>
          <NavLink className={buildLinkClass} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

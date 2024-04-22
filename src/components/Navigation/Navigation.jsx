import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <ul className={s.header}>
        <li className={s.home}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <p>{user.name}</p>
        <li>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
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
          </>
        )}
        {isLoggedIn && (
          <button type="button" onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navigation;

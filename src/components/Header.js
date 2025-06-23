import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../store/auth-slice.js";
import classes from "./Header.module.css";

const Header = () => {
  function fetchUserAuthState(state) {
    return state.auth.isAuthenticated;
  }
  const isAuthenticated = useSelector(fetchUserAuthState);

  const distpatch = useDispatch();
  function handleLogoutEvent() {
    distpatch(authSliceActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogoutEvent}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

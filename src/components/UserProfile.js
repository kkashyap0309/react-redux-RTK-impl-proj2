import { useSelector } from "react-redux";
import Counter from "./Counter";
import classes from "./UserProfile.module.css";
import { Fragment } from "react/jsx-runtime";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Fragment>
      <main className={classes.profile}>
        <h2>Hello!! {user} Profile</h2>
      </main>
      <Counter />
    </Fragment>
  );
};

export default UserProfile;

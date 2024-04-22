import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrap}>
      <h1>Page not found</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default NotFoundPage;

import s from "./HomePage.module.css";
import { RiContactsBook2Fill } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <h1 className={s.title}>
        ContactBook welcome page <RiContactsBook2Fill />
      </h1>
    </div>
  );
};

export default HomePage;

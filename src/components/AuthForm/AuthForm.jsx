import { Form, Formik } from "formik";
import s from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import CustomField from "../CustomField/CustomField";

const AuthForm = ({
  title,
  onSubmit,
  initialValues,
  type,
  validationSchema,
}) => {
  return (
    <div className={s.wrapper}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form_wrapper}>
          {type === "register" && (
            <CustomField name="name" placeholder="Enter your name" />
          )}

          <CustomField name="email" placeholder="Enter your email" />
          <CustomField
            name="password"
            placeholder="Enter your password"
            type="password"
          />

          <button type="submit">{title}</button>
          <p>
            You{" "}
            {type === "register"
              ? "already have an account?"
              : "don't have an account?"}{" "}
            <Link to={type === "register" ? "/login" : "/register"}>
              {" "}
              {type === "register" ? "Login" : "Register"}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;

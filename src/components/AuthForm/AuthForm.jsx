import { Field, Form, Formik } from "formik";
import s from "./AuthForm.module.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
  return (
    <div className={s.wrapper}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        <Form className={s.form_wrapper}>
          {type === "register" && (
            <Field type="text" name="name" placeholder="Enter your name" />
          )}
          <Field type="text" name="email" placeholder="Enter your email" />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
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

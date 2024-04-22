import AuthForm from "../../AuthForm/AuthForm";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <AuthForm title="Login" initialValues={initialValues} />
    </div>
  );
};

export default Login;

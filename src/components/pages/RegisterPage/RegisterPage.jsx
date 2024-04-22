import AuthForm from "../../AuthForm/AuthForm";

const RegisterPage = () => {
  const initialValues = {
    name: "",
    password: "",
    email: "",
  };
  return (
    <div>
      <AuthForm
        title="Register"
        initialValues={initialValues}
        type="register"
      />
    </div>
  );
};

export default RegisterPage;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../components/AuthForm/AuthForm";
import { register } from "../../redux/auth/operations";

import * as yup from "yup";
import { toast } from "react-hot-toast";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    password: "",
    email: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        toast.success(`Welcome,${data.user.name}!`);
        navigate("/");
      })
      .catch(() => toast.error("Credentials are invalid"));
  };

  return (
    <div>
      <AuthForm
        title="Register"
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        type="register"
      />
    </div>
  );
};

export default RegistrationPage;

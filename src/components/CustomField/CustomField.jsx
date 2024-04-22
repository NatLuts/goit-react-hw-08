import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import s from "./CustomField.module.css";

const CustomField = ({ name, placeholder, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label>
      {name}
      <div>
        <Field
          className={s.input}
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            className={s.icon_btn}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>

      <ErrorMessage name={name} component={"p"} className="red" />
    </label>
  );
};

export default CustomField;

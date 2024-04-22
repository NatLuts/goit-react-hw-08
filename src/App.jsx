import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage/HomePage";
import ContactsPage from "./components/pages/ContactsPage/ContactsPage";

import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

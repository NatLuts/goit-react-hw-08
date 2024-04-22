import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../ContactForm/ContactForm";
import ContactList from "../../ContactList/ContactList";
import SearchBox from "../../SearchBox/SearchBox";
import { fetchContactsThunk } from "../../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/slice";

export const selectContacts = (state) => state.contacts.contacts;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const searchData = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchData) ||
        contact.number.includes(searchData)
    );
  }
);

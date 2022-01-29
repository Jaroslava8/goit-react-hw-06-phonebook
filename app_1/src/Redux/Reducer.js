import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, addContact, changeFitler } from '../Redux/Action';
import { combineReducers } from '@reduxjs/toolkit';

const dataUsers = JSON.parse(localStorage.getItem('contacts')) ?? [];

const items = createReducer(dataUsers, {
  [deleteContact]: (state, action) => {
    const newContacts = state.filter(contact => contact.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    return newContacts;
  },
  [addContact]: (state, { payload }) => {
    const newContacts = [...state, payload];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    return newContacts;
  },
});

const filter = createReducer('', {
  [changeFitler]: (_, { payload }) => payload,
});

const contacts = combineReducers({
  items,
  filter,
});

export default contacts;
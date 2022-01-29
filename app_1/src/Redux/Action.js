import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const deleteContact = createAction('contacts/delete');

export const addContact = createAction('contacts/add', text => ({
  payload: {
    id: shortid.generate(),
    ...text,
  },
}));

export const changeFitler = createAction('contacts/filter');
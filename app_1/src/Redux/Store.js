import { configureStore } from '@reduxjs/toolkit';
import contacts from '../Redux/Reducer';

export default configureStore({ reducer: contacts });
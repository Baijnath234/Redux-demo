import {configureStore} from '@reduxjs/toolkit';
import {CustomerReducer} from './Reducer';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        custom:CustomerReducer,
        user: authSlice
    },
})

export default store;
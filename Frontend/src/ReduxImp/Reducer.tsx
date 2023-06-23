import {createReducer} from '@reduxjs/toolkit'

const initialState:any  = {
    Language: 'english'
};

export const CustomerReducer = createReducer (initialState, {

    english:(state, action) => {
        state.Language = action.type;
    },

    Hindi:(state, action) => {
        state.Language = action.type;
    },

    Japanese: (state, action) => {
        state.Language = action.type;
    }
})
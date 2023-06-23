import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  msg: string;
  user: string;
  token: string;
  loading: boolean;
  error: string;
}

interface SignUpBody {
  // Define the expected properties in the signup request body
}

const initialState: AuthState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: ""
}

export const signUpUser = createAsyncThunk('signUpUser', async (body: SignUpBody) => {
  const res = await fetch("dddddddddddddd", {
    method: "post",
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(body)
  });
  return await res.json();
});

export const signInUser = createAsyncThunk('signInUser', async (body: SignUpBody) => {
  const res = await fetch("dddddddddddddd", {
    method: "post",
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(body)
  });
  return await res.json();
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = action.payload.msg;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;

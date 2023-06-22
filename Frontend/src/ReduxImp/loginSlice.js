import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios";
const initialState = {
  loading: false,
  user: {},
  error: "",
};

export const loginUser = createAsyncThunk(
  "users/loginUser",
  (user, thunkAPI) => {
    return axios
      .post("/login", user)
      .then((res) => {
        if (res.status === 200) {
          // localStorage.setItem("token", data.token);
          return res.data;
        }
      })
      .catch((err) => {
        return thunkAPI.rejectWithValue(err.response.data.message);
      });
  }
);

const loginSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        (state.user = {}), (state.error = action.payload);
      }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          (state.error = "");
      });
  },
});

export default loginSlice.reducer;
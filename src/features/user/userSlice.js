import { getAddress } from "../../services/apiGeocoding";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// async function fetchAddress() {}

export const fetch_address = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const initialState = {
  user_name: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};
const user_slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update_name(state, action) {
      state.user_name = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetch_address.pending, (state, action) => {
        state.status = "loading";
      })
      
      .addCase(fetch_address.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetch_address.rejected, (state, action) => {
        state.status = "error";
        state.error = 'There was  a problem getting your address. Make sure to fill this field!';
      })
});

export const { update_name } = user_slice.actions;
export default user_slice.reducer;

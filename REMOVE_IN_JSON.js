import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("user/remove", async (user) => {
  try {
    await axios.delete(
      `http://localhost:3005/users/${user.id}`
    );

    //   We want to return the Whole user so we can use the ID in action payload
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Couldnt able to remove the user " + err);
  }
});

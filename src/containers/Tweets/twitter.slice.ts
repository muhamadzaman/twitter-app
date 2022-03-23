import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  tweets: Array<object>;
}

const initialState: IState = {
  tweets: [],
};

const tweetsSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setTweets: (state: IState, action) => {
      state.tweets = [...state.tweets ,action.payload]
    },
  },
});

export const { setTweets } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;

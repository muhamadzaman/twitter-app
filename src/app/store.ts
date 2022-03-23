import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tweetsReducer } from "../containers/Tweets/twitter.slice";
import { tweetsAPI } from "../containers/Tweets/twitter.api";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    [tweetsAPI.reducerPath]: tweetsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      //addMiddlewareHere

      tweetsAPI.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

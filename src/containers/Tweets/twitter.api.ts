import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuery} from '../../app/baseQuery';

export const tweetsAPI = createApi({
  reducerPath: 'tweetsSlice/api',
  baseQuery,
  endpoints: build => ({
    getTweets: build.query({
      query: () => ({
        url: '/fact',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetTweetsQuery} = tweetsAPI;

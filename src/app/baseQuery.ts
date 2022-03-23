import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.instantwebtools.net/v1",
  prepareHeaders: async (headers) => {
    return headers;
  },
});

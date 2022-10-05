import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

export const apiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),

    tagTypes: [],

    endPoints: (builder)=>({}),
});
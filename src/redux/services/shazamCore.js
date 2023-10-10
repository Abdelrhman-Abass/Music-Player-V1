// import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '0c1da9d3a0msh4dcec2df3fa369fp116b1fjsn0036a42329e4',
//       'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/songs/', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// export const shazamCoreApi = createApi({
//     reducerPath:'shazamCoreApi',
//     baseQuery:fetchBaseQuery({
//         baseUrl:'https://shazam-api7.p.rapidapi.com',
//         prepareHeaders:(headers)=>{
//             headers.set('X-RapidAPI-Key','0c1da9d3a0msh4dcec2df3fa369fp116b1fjsn0036a42329e4')
//             return headers;
//         },
//     }),
//     endpoints:(builder)=>{
//         getTopCharts:builder.query({query: ()=> '/charts/songs/'})
//     }
// });

// export const {
//     useGetTopChartsQuery,
// } = shazamCoreApi;


// https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?per_page=30&page=1
  // api.js
// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '0c1da9d3a0msh4dcec2df3fa369fp116b1fjsn0036a42329e4');
      headers.set('X-RapidAPI-Host', 'genius-song-lyrics1.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (params) => {
        return `chart/songs/?per_page=${params.per_page || '20'}&page=${params.page || '1'}`;
      },
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;


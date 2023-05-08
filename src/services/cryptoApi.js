import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
  'X-RapidAPI-Key': '442347ffc6msh84c018ce29c364bp18459djsnad7362aa5590',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url,headers:cryptoApiHeaders})
// const baseQuery = fetchBaseQuery({
//   baseUrl: '/',
//   prepareHeaders: (cryptoApiHeaders, { getState }) => {
//     const token = getState().auth.token

//     // If we have a token set in state, let's assume that we should be passing it.
//     if (token) {
//       cryptoApiHeaders.set('authorization', `Bearer ${token}`)
//     }

//     return headers
//   },
// })

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
     endpoints : (builder) =>({
      getCryptos : builder.query({
        query : (count)=> createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails :builder.query({
        query : (coinId)=> createRequest(`/coin/${coinId}`)
      }),
      getCryptoHistory :builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
      }), 

    })

});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi


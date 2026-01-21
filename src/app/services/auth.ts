import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  name: string;
  email: string;
}
export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.acessToken;
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    refresh: builder.mutation<
      { acessToken: string; refreshToken: string },
      string
    >({
      query: (refreshToken) => ({
        url: 'refresh',
        body: refreshToken,
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshMutation } = authApi;

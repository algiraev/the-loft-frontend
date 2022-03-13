import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from '../features/user/usersSlice';

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

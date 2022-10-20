import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLogin } from './login/loginAPI';
import { RootState, AppThunk } from '../../app/store';
import { AuthUser } from "../../models/authUser";

export interface AuthState {
    isLoggedIn: boolean;
    authUser?: AuthUser;
    status?: string
}

const initialState: AuthState = {
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<AuthUser>) => {
            state.authUser = action.payload;
            state.isLoggedIn = true;
        },
        login: (state, action: PayloadAction<AuthUser>) => {
            state.authUser = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.authUser = undefined;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = 'loading';
                state.isLoggedIn = false;
            })
            .addCase(userLogin.fulfilled, (state, action: any) => {
                state.status = 'finished';
                state.authUser = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(userLogin.rejected, (state) => {
                state.status = 'rejected';
                state.isLoggedIn = false;
            });
    },
});

export const { login, logout, register } = authSlice.actions;

export const selectStatus = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;

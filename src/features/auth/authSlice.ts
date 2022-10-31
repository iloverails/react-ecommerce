import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userRegister } from './register/registerAPI';
import { userLogin } from './login/loginAPI';
import { RootState } from '../../app/store';
import { AuthUser } from "../../models/authUser";

export interface AuthState {
    isLoggedIn: boolean;
    authUser?: AuthUser;
    loginStatus?: "loading" | "finished" | "rejected";
    registerStatus?: "loading" | "finished" | "rejected";
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
                state.loginStatus = 'loading';
                state.isLoggedIn = false;
            })
            .addCase(userLogin.fulfilled, (state, action: any) => {
                state.loginStatus = 'finished';
                state.authUser = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(userLogin.rejected, (state) => {
                state.loginStatus = 'rejected';
                state.isLoggedIn = false;
            })
            .addCase(userRegister.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.registerStatus = "finished"
            })
            .addCase('users/logout', (state, action) => {
                state.isLoggedIn = false;
                state.authUser = undefined;
            });
    },
});

export const { login, logout, register } = authSlice.actions;

export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
export const selectRegisterStatus = (state: RootState) => state.auth.registerStatus;
export const selectIsLoggedIn =  (state: RootState) => state.auth.isLoggedIn;
export default authSlice.reducer;

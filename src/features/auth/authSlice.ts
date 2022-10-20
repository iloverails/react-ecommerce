import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';
import { AuthUser } from "../../models/authUser";

export interface AuthState {
    isLoggedIn: boolean;
    authUser?: AuthUser;
}

const initialState: AuthState = {
    isLoggedIn: false,
};

// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount: number) => {
//         const response = await fetchCount(amount);
//         // The value we return becomes the `fulfilled` action payload
//         return response.data;
//     }
// );

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

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(incrementAsync.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(incrementAsync.fulfilled, (state, action) => {
    //             state.status = 'idle';
    //             state.value += action.payload;
    //         })
    //         .addCase(incrementAsync.rejected, (state) => {
    //             state.status = 'failed';
    //         });
    // },
});

export const { login, logout, register } = authSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;

import axios from 'axios'
import {createAsyncThunk, createAction} from "@reduxjs/toolkit";
import {AuthUser, LoginData} from "../../../models/authUser";

export const userLogin = createAsyncThunk(
    'users/login',
    async (data:LoginData, { rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await axios.post(`http://localhost:8000/users/login`, data);
            const j: AuthUser = await response.data;
            localStorage.setItem('authUser', JSON.stringify({
                access: j.access,
                authenticatedUser: j.authenticatedUser,
                refresh: j.refresh
            }));
            return fulfillWithValue(j);
        } catch (e: any) {
            return rejectWithValue(e.response);
        }
    },
);

export const userLogout = createAction(
    'users/logout',
    function logout() {
        localStorage.removeItem('authUser');
        return {
            payload: {
                success: true
            }
        }
    }
)
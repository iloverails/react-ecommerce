import axios from 'axios'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthUser} from "../../../models/authUser";

interface RegisterData {
    email: string,
    password: string,
    username?: string
}

export const userRegister = createAsyncThunk(
    'users/register',
    async (data:RegisterData, { rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await axios.post(`http://localhost:8000/users/register`, data);
            const j: AuthUser = await response.data;
            return fulfillWithValue(j);
        } catch (e: any) {
            return rejectWithValue(e.response);
        }
    },
);
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/types";

import type { ActionWithPayload } from '../models/authUser'

import type { AuthUser } from '../models/authUser'

let authUser = <AuthUser>{}

const obj: string | any = localStorage.getItem("authUser")

if (obj) {
    authUser = JSON.parse(obj);
}

const initialState = authUser
    ? { isLoggedIn: true, authUser }
    : { isLoggedIn: false, authUser: null };

export default function (state = initialState, action: ActionWithPayload<{ authUser: AuthUser }>) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                authUser: payload.authUser,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                authUser: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                authUser: null,
            };
        default:
            return state;
    }
}
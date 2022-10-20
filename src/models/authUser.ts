import { Action } from 'redux'

export type AuthUser = {
    access: string,
    refresh: string,
    authenticatedUser: {
        email: string,
        username?: string,
    }
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}
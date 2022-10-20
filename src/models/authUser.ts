import { Action } from 'redux'

export type AuthUser = {
    email: string,
    username?: string,
    access: string,
    refresh: string
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}
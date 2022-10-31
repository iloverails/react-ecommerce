import type { AuthUser } from '../models/authUser'

export default function authHeader() {
    const obj: string | null = localStorage.getItem('user')
    let authUser = <AuthUser>{}

    if (obj)
        try {
            authUser = JSON.parse(obj);
        } catch (err) {
            console.log(err)
        }

    if (authUser && authUser.access) {
        return { Authorization: 'Bearer ' + authUser.access };
    } else {
        return {};
    }
}
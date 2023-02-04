export default function useAuth() {
    const isAuth = localStorage.getItem('user');


    if (isAuth) {
        return true
    } else {
        return false
    }
}
export let baseUrl = 'http://localhost:5000';
export function getAuth() {
    let loc = localStorage.getItem('authToken');
    let ses = sessionStorage.getItem('authToken');

    if (loc) {
        return loc;
    }
    if (ses) {
        return ses;
    }
    return null;
}
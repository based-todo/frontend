export let baseUrl = 'https://based-todo.azurewebsites.net/';
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
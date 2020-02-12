// module.exports = apiRequest = async (url, method, bodyParams) => {
//     const response = fetch(url, {
//         method,
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: bodyParams ? JSON.stringify(bodyParams) : undefined
//     });
//     return await response.json();
// }

const getToken = () => {
    try {
        const auth = JSON.parse(localStorage.auth); 
        return auth.token;
    } catch (error) {
        return null;
    }
}

const getAuthorizationHeader = () => {
    const token = getToken();
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return config;
}

const isLoggedIn = () => {
    var loggedIn = false;
    try {
        const auth = JSON.parse(localStorage.auth); 
        if(auth.user && auth.token) {
            loggedIn = true;
        }
    } catch (error) {
        loggedIn = false;
    }
    return loggedIn;
}

export { isLoggedIn, getAuthorizationHeader };
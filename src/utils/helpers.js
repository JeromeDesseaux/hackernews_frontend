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

export { isLoggedIn };
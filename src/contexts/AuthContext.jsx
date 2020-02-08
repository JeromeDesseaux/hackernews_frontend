import React, { useState, useEffect } from "react";
import axios from 'axios';
import _ from "lodash";

const AuthContext = React.createContext();

const loadFromStorage = () => {
    if(localStorage.auth) {
        return JSON.parse(localStorage.auth)
    }
    return {user: {}, token: ""};
};

const saveToStorage = (user, token) => {
    localStorage.auth = JSON.stringify({
        user: user, 
        token: token
    });
};

const AuthProvider = (props) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    
    const store = {
        user: [user, setUser],
        token: [token, setToken],
    }

    useEffect( () => {
        const localStorageData = loadFromStorage();
        console.log(localStorageData);
        setUser(localStorageData.user);
        setToken(localStorageData.token);
    }, []);

    const login = async (username, password) => {
        const data = {
            username: username, 
            password: password
        };

        const options = {
            method: 'POST',
            headers: {'content-type':"application/json; charset=utf-8"},
            data: JSON.stringify(data),
            url: "http://127.0.0.1:4000/users/login"
        }
        
        let response = null;
        try {
            response = await axios(options);
        } catch (error) {
            return false;
        }
        if(response.status === 201) {
            setUser(response.data.user);
            setToken(response.data.token);
            saveToStorage(response.data.user, response.data.token);
            return true;
        }
        return false;
    };
    const logout = () => {
        localStorage.removeItem("auth");
    };

    const register = async (username, password) => {
        const data = {
            username: username, 
            password: password
        };

        const options = {
            method: 'POST',
            headers: {'content-type':"application/json; charset=utf-8"},
            data: JSON.stringify(data),
            url: "http://127.0.0.1:4000/users/register"
        }
        
        const response = await axios(options);
        if(response.status === 201) {
            setUser(response.data.user);
            setToken(response.data.token);
            saveToStorage(user, token);
            return true ;
        }
        return false;
    };
    
    return (
        <AuthContext.Provider value={{store, login, logout, register}} {...props}>
            { props.children }
        </AuthContext.Provider>
    )
};

const useAuth = () => React.useContext(AuthContext);

export {AuthProvider, useAuth}
import axios from "axios";


const API_URL = "/api/auth/"

//Register
const register = async (userData) => {
    try {

        const response = await axios.post(API_URL + "register", userData);

        if(response.data){
            localStorage.setItem('student', JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        console.error("Registration error:", error.response ? error.response.data : error.message)
        throw error;
    }
    
}

//Login
const login = async (userData) => {
    try {

        const response = await axios.post(API_URL + "login", userData);

        if(response.data){
            localStorage.setItem('student', JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        console.error("Registration error:", error.response ? error.response.data : error.message)
        throw error;
    }
    
}

//Logout student
const logout = () => localStorage.removeItem("user")

const authService = {register,login, logout,}

export default authService
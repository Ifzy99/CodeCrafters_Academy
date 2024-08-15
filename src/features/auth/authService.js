import axios from "axios";


const API_URL = "/api/students/"

//Register
const register = async (studentData) => {
    try {

        const response = await axios.post(API_URL + "register", studentData);

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
const login = async (studentData) => {
    try {

        const response = await axios.post(API_URL + "login", studentData);

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
const logout = () => localStorage.removeItem("student")

const authService = {register,login, logout,}

export default authService
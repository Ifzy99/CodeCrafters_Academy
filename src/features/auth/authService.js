import axios from "axios";


// const API_URL = "/api/auth/"

//Register Student
const registerStudent = async (userData) => {
    try {

        const response = await axios.post( "/api/auth/students/register", userData);

        if(response.data){
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        console.error("Registration error:", error.response ? error.response.data : error.message)
        throw error;
    }
    
}

//Login
const loginStudent = async (userData) => {
    try {

        const response = await axios.post( "/api/auth/login", userData);

        if(response.data){
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        console.error("Registration error:", error.response ? error.response.data : error.message)
        throw error;
    }
    
}

//Logout student
const logout = () => localStorage.removeItem("user")

const authService = {registerStudent,loginStudent, logout,}

export default authService
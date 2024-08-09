import axios from "axios";


const API_URL = "/api/students/register"

//Register
const register = async (studentData) => {
    try {

        const response = await axios.post(API_URL, studentData);

        if(response.data){
            localStorage.setItem('student', JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        console.error("Registration error:", error.response ? error.response.data : error.message)
        throw error;
    }

    
}

const authService = {register}

export default authService
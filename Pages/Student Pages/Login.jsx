import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginStudent, reset } from "../../src/features/auth/authSlice"
import { toast } from "react-toastify"
import "../Student Pages/Styles/register.css"
import { useNavigate } from "react-router-dom"
import Spinner from "../../src/components/Spinner"








const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })

      const { email, password } = formData

      const dispatch = useDispatch()
      const navigate = useNavigate()

      const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

      useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        //Redirect when logged in
        if (isSuccess && user) {
            navigate('/student/dashboard')
        }

        dispatch(reset())

      }, [isError,isLoading,isSuccess, user, message, navigate, dispatch])

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
          email,
          password,
        }
        
        dispatch(loginStudent(userData))

      }

      
      if(isLoading){
        return <Spinner/>
      }
   
  return (
    <>

    <div className="regContainer">
    <div className="registerTxt-section">
      <div className="registerTxt-content">
        <img src="logo.png" alt="Logo" className="logo"/>
        <h1>Welcome to CodeCrafters Admission Portal</h1>
      </div>
    </div>
    <div className="form-section">
      <div className="form-header">
        <img src="logo.png" alt="SCICT" className="mobile-logo" />
        <div>
          <h2>CodeCrafters</h2>
          <p>Admission Portal</p>
        </div>
      </div>
      <h1>Login</h1>
      <p className="subtitle">Enter your email and password to log in to your admission account</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" autoComplete="email" onChange={onChange} placeholder="example@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input type="password" id="password" name="password" value={password} autoComplete="new-password" onChange={onChange} placeholder="Password" />
            <span className="password-toggle">👁️</span>
          </div>
          <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        </div>
        <button type="submit" value="submit" className="btn">Sign In →</button>
      </form>
      <p className="sign-in-link">
        <a href="/register">
        Begin Admission Process
        </a>
      </p>
    </div>
  </div>
    </>
  )
}

export default Login
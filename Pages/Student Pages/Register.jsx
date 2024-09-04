import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import "../Student Pages/Styles/register.css"
import { useDispatch, useSelector } from "react-redux"
import { registerStudent, reset } from "../../src/features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import Spinner from "../../src/components/Spinner"







const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        phone:'',
      })

      const { name, email, password, password2, phone } = formData

      const dispatch = useDispatch()
      const navigate = useNavigate()

      const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

      useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        //Redirect when logged in
        if (isSuccess && user && user.role === "student") {
            navigate("/")
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

        if(password !== password2){
            toast.error('Passwords do not match')
        }else{
            const userData = {name, email, password,phone,}
            dispatch(registerStudent(userData))
        }
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
      <h1>Create account for admission</h1>
      <p className="subtitle">Kindly fill up your details to start admission process.</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name}  onChange={onChange} placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" autoComplete="email" onChange={onChange} placeholder="example@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={phone}  onChange={onChange} placeholder="+2348000000000" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input type="password" id="password" name="password" value={password} autoComplete="new-password" onChange={onChange} placeholder="Password" />
            <span className="password-toggle">👁️</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirm password">Confirm Password</label>
          <div className="password-input">
            <input type="password" id="password2" name="password2" value={password2}  autoComplete="new-password" onChange={onChange} placeholder="Confirm Password" />
            <span className="password-toggle">👁️</span>
          </div>
        </div>
        
        <button type="submit" value="submit" className="btn">Proceed →</button>
      </form>
      <p className="sign-in-link">
        <a href="/login">
        Sign in instead
        </a>
      </p>
    </div>
  </div>
    </>
  )
}

export default Register
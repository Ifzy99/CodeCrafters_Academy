import { useEffect, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
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

  <section className='form'>
  <div className="card">
    <div className="card-header">
      <div className="text-header"><h1><FaSignInAlt/></h1>Login</div>
    </div>
    <div className="card-body">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input required="" className="form-control" name="email" id="email" value={email} type="email" autoComplete="email" onChange={onChange} placeholder="Enter your email"/>
        </div>
        <div className="form-group">
          <input required="" className="form-control" name="password" id="password" value={password} type="password" autoComplete="new-password" onChange={onChange} placeholder="Enter Password"/>
        </div>
        <input type="submit" className="btn" value="submit"/> 
       </form>
    </div>
  </div>
  
  </section>
    </>
  )
}

export default Login
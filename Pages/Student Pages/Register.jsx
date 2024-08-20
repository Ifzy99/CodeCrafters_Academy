import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { toast } from "react-toastify"
import "../Student Pages/Styles/register.css"
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from "../../src/features/auth/authSlice"
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
        if (isSuccess || user) {
          if(user.role === "student"){
            navigate('./Login.jsx')
          }else if(user.role === "staff"){
            navigate("../Staff Pages/LoginStaff.jsx")
          }
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
            dispatch(register(userData))
        }
      }

      if(isLoading){
        return <Spinner/>
      }
   
  return (
    <>
    <section className='heading'>
        <h1>
        <FaUser /> Register
        </h1>
        <p>Please create an account</p>
  </section>

  <section className='form'>
  <div className="card">
    <div className="card-header">
      <div className="text-header"><h1><FaUser/></h1>Register</div>
    </div>
    <div className="card-body">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input required="" className="form-control" name="name" id="name" value={name} type="text" onChange={onChange} placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <input required="" className="form-control" name="email" id="email" value={email} type="email" autoComplete="email" onChange={onChange} placeholder="Enter your email"/>
        </div>
        <div className="form-group">
          <input required="" className="form-control" name="password" id="password" value={password} type="password" autoComplete="new-password" onChange={onChange} placeholder="Enter Password"/>
        </div>
        <div className="form-group">
          <input required="" className="form-control" name='password2' id="password2"  value={password2} type="password" autoComplete="new-password" onChange={onChange} placeholder="Confirm password"/>
        </div>
        <div className="form-group">
          <input required="" className="form-control" name='phone' id="phone"  value={phone} type="number" onChange={onChange} placeholder="Enter your phone number"/>
        </div>
        <input type="submit" className="btn" value="submit"/> 
       </form>
    </div>
  </div>
  
  </section>
    </>
  )
}

export default Register
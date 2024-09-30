import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
// import Header from './components/Header'
import Home from '../Pages/Home Pages/Home'
import Test from '../Pages/Home Pages/Test'
import About from '../Pages/Home Pages/About'
import Login from '../Pages/Student Pages/Login'
import Register from '../Pages/Student Pages/Register'
import Dashboard from '../Pages/Student Pages/Dashboard'





function App() {

  return (
    <>
    <Router>
          <Routes>
              
              <Route path="/" element={<Home/>}/>
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/test' element={<Test/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/student/dashboard' element={<Dashboard/>} />
              
          </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App

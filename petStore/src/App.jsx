
import Navbar from  './components/navbar'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import {Route,Routes, useLocation} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

function App() {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path = '/my-bookings' element = {<MyBookings/>}/>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App

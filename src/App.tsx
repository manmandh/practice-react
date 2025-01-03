import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Home/ContactPage'
import BlogPage from './pages/Home/BlogPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Routes>
        <Route path='/blog' element={<BlogPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

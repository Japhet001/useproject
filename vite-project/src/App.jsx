
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import header from './components/header'
import footer from './components/footer'
import About from './pages/about'
import Blogs from './pages/Blogs'
import HomePage from './pages/homePage'
import NotFound from './pages/notFound'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/notFound' element={<notFound/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

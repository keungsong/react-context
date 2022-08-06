import { useState,useEffect,createContext } from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'



import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
     axios.get('https://gitconnected.com/v1/portfolio/keungsong')
      .then(res => setData(res.data))
  },[])

  return (
    <DataContext.Provider value={data}>
       <Nav/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
       </Routes>
       <Footer />
    </DataContext.Provider>
  )
}

export default App

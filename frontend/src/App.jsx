import './App.css'
import Create from './component/Create'
import Navbar from './component/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Read from './component/Read'
import Update from './component/Update'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  
  </>
  )
}

export default App

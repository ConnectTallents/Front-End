import './globals.css'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div className='container'>
      <Cabecalho />
        <Outlet />
      <Rodape />
    </div>
  )
}

export default App

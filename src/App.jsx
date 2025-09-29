import Pais from './components/Pais.jsx'
import "./App.css"
import { useSelector } from 'react-redux'

function App() {
  const paises = useSelector(state => state.paises)
  return (
    <>
      {
        paises.map(pais => (
          <Pais key={pais.nombre} nombre={pais.nombre} provincias={pais.provincias} />
        ))
      }
    </>
  )
}

export default App
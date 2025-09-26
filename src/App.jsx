import { useState } from 'react'
import Pais from './components/Pais.jsx'
import "./App.css"

function App() {
  const [paises, setPaises] = useState([
    {
      nombre: 'México', provincias:
        [
          {
            nombre: 'Jalisco', municipios:
              [
                {
                  nombre: 'Guadalajara', barrios:
                    [
                      { nombre: 'Centro', casas: 2600 },
                      { nombre: 'Americana', casas: 1500 }
                    ]
                },
                {
                  nombre: 'Zapopan', barrios:
                    [
                      { nombre: 'Ciudad Granja', casas: 1800 },
                      { nombre: 'Valle Real', casas: 2100 }
                    ]
                }
              ]
          },
          {
            nombre: 'Nuevo León', municipios:
              [
                {
                  nombre: 'Monterrey', barrios:
                    [
                      { nombre: 'San Pedro', casas: 3200 },
                      { nombre: 'Cumbres', casas: 2800 }
                    ]
                },
                {
                  nombre: 'San Nicolás', barrios:
                    [
                      { nombre: 'La Fama', casas: 1200 },
                      { nombre: 'Los Ángeles', casas: 1700 }
                    ]
                }
              ]
          }
        ]
    },
    {
      nombre: 'Argentina', provincias:
        [
          {
            nombre: 'Buenos Aires', municipios:
              [
                {
                  nombre: 'La Plata', barrios:
                    [
                      { nombre: 'Tolosa', casas: 1800 },
                      { nombre: 'Ringuelet', casas: 1400 }
                    ]
                },
                {
                  nombre: 'Mar del Plata', barrios:
                    [
                      { nombre: 'Punta Mogotes', casas: 2200 },
                      { nombre: 'La Perla', casas: 2500 }
                    ]
                }
              ]
          },
          {
            nombre: 'Córdoba', municipios:
              [
                {
                  nombre: 'Córdoba', barrios:
                    [
                      { nombre: 'Nueva Córdoba', casas: 3000 },
                      { nombre: 'Alta Córdoba', casas: 2700 }
                    ]
                },
                {
                  nombre: 'Villa Carlos Paz', barrios:
                    [
                      { nombre: 'Centro', casas: 1600 },
                      { nombre: 'Avenida San Martín', casas: 1900 }
                    ]
                }
              ]
          }
        ]
    },
    {
      nombre: 'España', provincias:
        [
          {
            nombre: 'Madrid', municipios:
              [
                {
                  nombre: 'Madrid', barrios:
                    [
                      { nombre: 'Salamanca', casas: 3500 },
                      { nombre: 'Chamberí', casas: 3200 }
                    ]
                },
                {
                  nombre: 'Alcalá de Henares', barrios:
                    [
                      { nombre: 'Centro', casas: 2100 },
                      { nombre: 'La Garena', casas: 1800 }
                    ]
                }
              ]
          },
          {
            nombre: 'Cataluña', municipios:
              [
                {
                  nombre: 'Barcelona', barrios:
                    [
                      { nombre: 'Eixample', casas: 4200 },
                      { nombre: 'Gràcia', casas: 3800 }
                    ]
                },
                {
                  nombre: 'Girona', barrios:
                    [
                      { nombre: 'Barri Vell', casas: 1300 },
                      { nombre: 'Eixample', casas: 2000 }
                    ]
                }
              ]
          }
        ]
    }
  ])
  return (
    <>
      {
        paises.map(pais => (
          <Pais key={pais.nombre} nombre={pais.nombre} provincias={pais.provincias} setter={setPaises} paises={paises} />
        ))
      }
    </>
  )
}

export default App
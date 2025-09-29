import Barrio from './Barrio.jsx'
export default function Municipio({ nombre, barrios }) {
    return (
        <div className="municipio">
            <h2>Municipio</h2>
            <p>Nombre: {nombre}</p>
            <div>
                {barrios.map(barrio => (
                    <Barrio key={barrio.nombre} nombre={barrio.nombre} casas={barrio.casas} />
                ))}
            </div>
        </div>
    )
}
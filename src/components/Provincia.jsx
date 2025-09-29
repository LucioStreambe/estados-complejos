import Municipio from "./Municipio"
const Provincia = ({ nombre, municipios }) => {
    return (
        <div className="provincia">
            <h2>Provincia</h2>
            <p>Nombre: {nombre}</p>
            <div>
                {municipios.map(municipio => (
                    <Municipio key={municipio.nombre} nombre={municipio.nombre} barrios={municipio.barrios} />
                ))}
            </div>
        </div>
    )
}

export default Provincia

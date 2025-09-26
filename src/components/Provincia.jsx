import Municipio from "./Municipio"
const Provincia = ({ nombre, municipios, setter, paises }) => {
    return (
        <div className="provincia">
            <h2>Provincia</h2>
            <p>Nombre: {nombre}</p>
            <div>
                {municipios.map(municipio => (
                    <Municipio key={municipio.nombre} nombre={municipio.nombre} barrios={municipio.barrios} setter={setter} paises={paises} />
                ))}
            </div>
        </div>
    )
}

export default Provincia

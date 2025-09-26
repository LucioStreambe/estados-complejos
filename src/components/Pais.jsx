import Provincia from "./Provincia"

function Pais({ nombre, provincias, setter, paises }) {
    return (
        <div className="pais">
            <h2>País</h2>
            <p>Nombre: {nombre}</p>
            <div>
                {provincias.map(provincia => (
                    <Provincia key={provincia.nombre} nombre={provincia.nombre} municipios={provincia.municipios} setter={setter} paises={paises} />
                ))}
            </div>

        </div>
    )
}

export default Pais
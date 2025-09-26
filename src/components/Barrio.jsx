export default function Barrio({ nombre, casas, setter, paises }) {
    const casa_handler = (incremento) => {
        const nuevosPaises = paises.map(pais => {
            return {
                ...pais,
                provincias: pais.provincias.map(provincia => {
                    return {
                        ...provincia,
                        municipios: provincia.municipios.map(municipio => {
                            return {
                                ...municipio,
                                barrios: municipio.barrios.map(barrio => {
                                    if (barrio.nombre === nombre) {
                                        return { ...barrio, casas: barrio.casas + incremento }
                                    }
                                    return barrio
                                })
                            }
                        })
                    }
                })
            }
        })
        setter(nuevosPaises)
    }


    return (
        <div className="barrio">
            <h2>Barrio</h2>
            <p>Nombre: {nombre}</p>
            <div>
                <button onClick={() => { casa_handler(-1) }}>sacar casa</button>
                <button onClick={() => { casa_handler(1) }}>agregar casa</button>
            </div>
            {casas} casas

        </div>
    )
}
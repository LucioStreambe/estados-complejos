import { useDispatch } from "react-redux"

export default function Barrio({ nombre, casas }) {
    const dispatch = useDispatch()


    const casa_handler = (incremento) => {
        dispatch({
            type: "paises/agregarCasa",
            payload: {
                barrioNombre: nombre,
                cantidad: incremento
            }
        })
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
import { createContext, useState } from "react";
export const dataContext = createContext();

const DataProvider = ({ children}) => {
    const[comprasDelCarrito, setComprasDelCarrito] = useState([])
    const[cantidadElementos, setCantidadElementos] = useState(0)

    return(
        //Todos los valores que esten dentro de este componente se van a repartir en toda la aplicaccion
        <dataContext.Provider value={{comprasDelCarrito, setComprasDelCarrito, cantidadElementos, setCantidadElementos}}>{children}</dataContext.Provider>
    )
}
export default DataProvider
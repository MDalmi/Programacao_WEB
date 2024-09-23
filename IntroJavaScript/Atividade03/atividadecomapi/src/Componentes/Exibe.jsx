import { useContext } from "react";
import AppContext from "../AppContext";

function Exibe() {

    const { salario } = useContext(AppContext);

    return (
        <>
            {
               
                <h1> O SALARIO SEU É {salario} </h1>
            }
        </>
    )
}

export default Exibe;
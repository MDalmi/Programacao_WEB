import { useContext } from "react";
import AppContext from "../AppContext";


function Tela1() {
    
    const {nome, setNome,  telefone, setTelefone,  
        horas, setHoras,  valorhora, setValorHora, calculaSalario } = useContext(AppContext);

    return (
        <>
            <div>
                <label>Nome</label>
                <input type="text" value={nome}
                    onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <label>Telefone</label>
                <input type="text" value={telefone}
                    onChange={e => setTelefone(e.target.value)} />
            </div>

            <button onClick={()=> calculaSalario()}>Avançar</button>    
     
        </>
    )
}

export default Tela1;
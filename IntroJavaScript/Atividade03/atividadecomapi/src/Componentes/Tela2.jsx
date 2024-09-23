import { useContext } from "react";
import AppContext from "../AppContext";


function Tela2() {

    const { nome, setNome, telefone, setTelefone,
        horas, setHoras, valorhora, setValorHora, calculaSalario } = useContext(AppContext);

    return (
        <>
            <div>
                <h2>Informe os detalhes do trabalho:</h2>
                <label>
                    Valor da Hora:
                    <input
                        type="number"
                        value={valorhora}
                        onChange={(e) => setValorHora(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Horas Trabalhadas:
                    <input
                        type="number"
                        value={horas}
                        onChange={(e) => setHoras(e.target.value)}
                    />
                </label>
                <br />
                <button onClick={concluir}>Concluir</button>
            </div>
        </>
    )
}

export default Tela2;
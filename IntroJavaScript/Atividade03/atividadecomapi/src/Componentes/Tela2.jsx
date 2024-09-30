import { useContext } from "react";
import AppContext from "../AppContext";
import "./Telas.css";


export default function Tela2() {

    const { horas, setHoras, valorhora, setValorHora, calculaINSS } = useContext(AppContext);

    return (
        <>
            <div className="container">
                <h2>Dados do Salario/Hora</h2>
                <div className="form-group">
                    <label>
                        Valor da Hora
                        <input
                            type="number"
                            value={valorhora}
                            onChange={(e) => setValorHora(e.target.value)}
                        />
                    </label>
                </div>
                <br />
                <div className="form-group">
                    <label>
                        Horas Trabalhadas
                        <input
                            type="number"
                            value={horas}
                            onChange={(e) => setHoras(e.target.value)}
                        />
                    </label>
                </div>
                <br />
                <button onClick={() => calculaINSS()}>Concluir</button>
            </div>
        </>
    )
}

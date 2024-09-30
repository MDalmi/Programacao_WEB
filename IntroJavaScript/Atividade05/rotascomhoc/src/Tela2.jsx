import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Tela2() {

    const [valorhora, setValorHora] = useState("");
    const [horas, setHoras] = useState("");
    const navigate = useNavigate();

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
                <button>Concluir</button>
            </div>
        </>
    )
}

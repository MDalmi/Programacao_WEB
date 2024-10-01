import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


export default function Tela2() {
    const [valorhora, setValorHora] = useState("");
    const [horas, setHoras] = useState("");
    const location = useLocation();
    const { nome, telefone } = location.state || {};
    const navigate = useNavigate();
    const [salario, setSalario] = useState(0);
    const [salarioliq, setSalarioliq] = useState(0);
    const [valorPagINSS, setvalorPagINSS] = useState(0);

    const calculaINSS = () => {
        const salariototal = (Number(horas) * Number(valorhora) * 5).toFixed(2); // Cálculo correto do salário
        setSalario(salariototal); // Define o salário corretamente com o valor calculado
        let inss = 0;

        // Calculando INSS com base no salariototal
        if (salariototal <= 1302.00) {
            inss = (salariototal * 0.075).toFixed(2);
        } else if (salariototal <= 2571.29) {
            inss = (salariototal * 0.09).toFixed(2);
        } else if (salariototal <= 3856.94) {
            inss = (salariototal * 0.12).toFixed(2);
        } else if (salariototal <= 7507.49) {
            inss = (salariototal * 0.14).toFixed(2);
        } else {
            inss = (salariototal * 0.14).toFixed(2);
        }

        setvalorPagINSS(inss); // Atualiza o valor pago ao INSS
        const salarioliquido = (salariototal - inss).toFixed(2); // Calcula o salário líquido
        setSalarioliq(salarioliquido); // Atualiza o salário líquido

        // Navega para a próxima tela com os valores corretos
        navigate('/privado/tela3', {
            state: {
                nome,
                telefone,
                salario: salariototal,
                salarioliq: salarioliquido,
                valorPagINSS: inss
            }
        });
    };

    useEffect(() => { }, [salario]);

    useEffect(() => { }, [salarioliq]);

    useEffect(() => { }, [valorPagINSS]);

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
                <button onClick={calculaINSS}>Concluir</button>
            </div>
        </>
    );
}


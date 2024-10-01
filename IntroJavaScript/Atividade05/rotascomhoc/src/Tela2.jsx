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
        const salariototal = (Number(horas) * Number(valorhora) * 5).toFixed(2);;
        setSalario(salario);
        let inss = 0;

        if (salario <= 1302.00) {
            inss = Math.floor(salario * 0.075).toFixed(2);
        } else if (salario <= 2571.29) {
            inss = Math.floor(salario * 0.9).toFixed(2);
        } else if (salario <= 3856.94) {
            inss = Math.floor(salario * 0.12).toFixed(2);
        } else if (salario <= 7507.49) {
            inss = Math.floor(salario * 0.14).toFixed(2);
        } else {
            inss = Math.floor(salario * 0.14).toFixed(2);
        }

        setvalorPagINSS(inss);
        const salarioliquido = (salario - inss).toFixed(2);
        setSalarioliq(salarioliquido); // Salário líquido
        
        navigate('/privado/tela3', {
            state: {
                nome,
                telefone,
                salario : salariototal,
                salarioliq : salarioliquido,
                valorPagINSS : inss
            }
        });

    }

    useEffect(() => {

    }, [salario]);

    useEffect(() => {

    }, [salarioliq]);

    useEffect(() => {

    }, [valorPagINSS]);

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
    )
}

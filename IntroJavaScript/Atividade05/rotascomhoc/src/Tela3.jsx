import InputMask from 'react-input-mask';
import { useLocation } from 'react-router-dom';

export default function Tela3() {
    const location = useLocation();
    const { nome, telefone, salario, salarioliq, valorPagINSS } = location.state || {};

    return (
        <>
            <div className="container" style={{marginTop : "50px"}}>
                <h2>Dados da Trabalho Calculados</h2>
                <div className="form-group">
                    <label>
                        Nome
                        <input
                            value={nome || ''} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Telefone
                        <InputMask
                            mask="(54) 9 9999-9999"
                            value={telefone || ''}
                            readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Salário Bruto
                        <input
                            type="text" value={salario || ''} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Valor Pago ao INSS
                        <input
                            type="text" value={valorPagINSS || ''} readOnly
                        />
                    </label>
                    <br />
                </div>
                <div className="form-group">
                    <label>
                        Salário Líquido
                        <input
                            type="text" value={salarioliq || ''} readOnly
                        />
                    </label>
                    <br />
                </div>
            </div>
        </>
    );
}

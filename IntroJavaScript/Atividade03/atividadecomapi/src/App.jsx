import { useEffect, useState } from "react";
import Tela1 from "./Componentes/Tela1";
import Tela2 from "./Componentes/Tela2";
import Tela3 from "./Componentes/Tela3";
import AppContext from "./AppContext";


function App() {

  const [tela, setTela] = useState(0);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [horas, setHoras] = useState(0);
  const [valorhora, setValorHora] = useState(0);
  const [salario, setSalario] = useState(0);
  const [salarioliq, setSalarioliq] = useState(0);
  const [valorPagINSS, setvalorPagINSS] = useState(0);
  /*
    Crie uma aplicação React, utilizando a Context API para compartilhar estados e
    métodos. A aplicação deve ser capaz de receber o nome de uma pessoa e seu
    telefone, bem como a quantidade de horas que trabalha por semana e o valor
    recebido por hora. Deve ser calculado o valor do salário considerando a
    quantidade de horas por semana, o valor da hora e o mês comercial que tem 5
    semanas. Exemplo:

    De        Até       Alíquota
    0,00      1.302,00  7,5%
    1.302,01  2.571,29  9,00%
    2.571,30  3.856,94  12,00%
    3.856,95  7.507,49  14,00%

  */

  const calculaSalario = () => {
    
    avancarTela();
  }

  const calculaINSS = () => {
    const salario = (Number(horas) * Number(valorhora) * 5).toFixed(2);; 
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
    const salLiq = (salario - inss).toFixed(2);
    setSalarioliq(salLiq); // Salário líquido
    avancarTela();
  }

  const avancarTela = () => setTela(tela + 1);
  
  useEffect(() => {
    
    }, [salario]);

  useEffect(() => {
      
  }, [salarioliq]);

  useEffect(() => {
        
  }, [valorPagINSS]);

  return (
    <AppContext.Provider value={
  { nome, setNome,  telefone, setTelefone,  horas, 
    setHoras,  valorhora, setValorHora, salario, calculaSalario , calculaINSS, salarioliq, valorPagINSS}
    }>
    
  <div>
      {/* Tela Inicial */}
      {tela === 0 && (
        <div style={{textAlign : "center"}}>
          <h1>Bem-vindo!</h1>
          <button onClick={avancarTela}>INICIAR PROCESSO</button>
        </div>
      )}

      {/* Tela 1: Nome e Telefone */}
      {tela === 1 && (
        <Tela1/>
      )}

      {/* Tela 2: Valor da Hora e Horas Trabalhadas */}
      {tela === 2 && (
        <Tela2/>
      )}

      {/* Tela 2: Valor da Hora e Horas Trabalhadas */}
      {tela === 3 && (
        <Tela3/>
      )}

    
    </div>      
    </AppContext.Provider>
  );
}

export default App;

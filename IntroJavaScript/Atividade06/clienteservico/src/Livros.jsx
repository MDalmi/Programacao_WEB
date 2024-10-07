import { useState, useEffect } from "react";

function Livros() {

    const [livros, setLivros] = useState([]);
    const [nome, setNome] = useState("");
    const [ano, setAno] = useState('');
    const [editora, setEditora] = useState("");

    const pegaLivros = async () => {
        await fetch('http://localhost:3002/livros')
            .then(response => response.json())
            .then(json => setLivros(json))
            .catch(err => setLivros("Erro: " + err))
    }

    const remover = async index => {
        if (window.confirm("Deseja remover o livro? ")) {
            await fetch(`http://localhost:3002/livros/${index}`,
                {
                    method: "DELETE"
                }
            ).then(response => response.json())
                .then(json => alert(json))
            pegaLivros()
        }
    }

    const criarLivro = async () => {
        await fetch('http://localhost:3002/livros',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "nome": nome,
                    "editora": editora,
                    "ano": ano
                })
            }
        ).then(response => response.json())
            .then(json => {
                alert(json)
                pegaLivros()
                setEditora("")
                setAno("")
                setNome("")
            })
    }

    useEffect(() => {
        pegaLivros();
    }, [])

    return (
        < >
            <h1> Livros </h1>
            <div >
                <table>
                    {/* criar formulário */}
                    <tr>
                        <th>Nome</th>
                        <th>Editora</th>
                        <th>Ano</th>
                        <th>Remover</th>
                    </tr>
                    {
                        livros.map((livro, index) => (
                            <tr key={livro.nome}>
                                <th>{livro.nome}</th>
                                <th>{livro.editora}</th>
                                <th>{livro.ano}</th>
                                <th><button onClick={() => remover(index)}>Remover - {index}</button> </th>
                            </tr>
                        ))

                    }
                </table>
            </div>
        </>
    )
}

export default Livros;
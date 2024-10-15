import { useState, useEffect } from "react";

function Livros() {

    const [livros, setLivros] = useState([]);
    const [nome, setNome] = useState("");
    const [editora, setEditora] = useState("");
    const [ano, setAno] = useState("");

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
                alert(json);
                pegaLivros();
                setEditora("");
                setAno("")
                setNome("");
            })
    }


    const pegaLivros = async () => {
        await fetch('http://localhost:3002/livros')
            .then(response => response.json())
            .then(json => setLivros(json))
    }

    const remover = async index => {
        if (window.confirm('Deseja remover o livro?')) {
            await fetch(`http://localhost:3002/livros/${index}`,
                {
                    method: "DELETE"
                }
            ).then(response => response.json())
                .then(json => alert(json));
            pegaLivros();
        }
    }

    useEffect(() => {
        pegaLivros();
    }, [])


    return (
        <>
            <h1>Livros</h1>
            <div>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome}
                        onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Editora:</label>
                    <input type="text" value={editora}
                        onChange={e => setEditora(e.target.value)} />
                </div>
                <div>
                    <label>Ano:</label>
                    <input type="number" value={ano}
                        onChange={e => setAno(e.target.value)} />
                </div>
                <button onClick={() => criarLivro()}>Criar Livro</button>
            </div>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Editora</th>
                    <th>Ano</th>
                    <th>Remover</th>
                </tr>
                {
                    livros.map((livro, index) => (
                        <tr key={index}>
                            <td>{livro.nome}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.ano}</td>
                            <td><button onClick={() => remover(index)}>
                                Remover - {index}
                            </button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Livros;
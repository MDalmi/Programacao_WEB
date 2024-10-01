import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("usuario");

    return (
        <> <div style={{textAlign : "center", marginTop : "50px"}}>
            {
                !isAuth
                    ?
                    (
                        <>
                            <div>
                                <label style={{padding : "10px"}}>Usuário</label>
                                <input type="text" value={usuario}
                                    onChange={e => setUsuario(e.target.value)} />
                            </div>
                            <button onClick={() => {
                                localStorage.setItem("usuario", usuario);
                                navigate('/privado');
                            }}>Login</button>
                        </>
                    )
                    :
                    (
                        <button onClick={() => {
                            localStorage.removeItem("usuario");
                            navigate('/');
                        }}>
                            Logout</button>
                    )
            }
        </div>
        </>
    )

}

export default Login;
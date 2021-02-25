

/*

import React, { useState } from 'react';
import { auth } from '../../firebase-config';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const historia = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgerror, setMsgError] = useState(null)

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .then((r) => {
                console.log(r)
                historia.push("/admin/mi-tienda-online")
            })
            .catch((e) => {
                if (e.code == 'auth/wrong-password') {
                    setMsgError('Password incorrecta')
                }
                if (e.code == 'auth/user-not-found') {
                    setMsgError('El usuario no coincide con un registro de esta aplicacion')
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-light p-4">Iniciar Sesion</h2>
            <div className="row mt-3 justify-center">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <form
                            className="form-group"
                        >
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="form-control"
                                placeholder="Email"
                                type="email"
                            />
                            <input
                                onChange={(e) => { setPass(e.target.value) }}
                                className="form-control mt-3"
                                placeholder="Contraseña"
                                type="password"
                            />
                        </form>
                        <button
                            onClick={LoginUsuario}
                            className="btn btn-success btn-block"
                        >
                            Iniciar sesion

                        </button>
                        {
                            msgerror != null ?
                                (
                                    <div className="alert alert-danger mt-3" role="alert">
                                        {msgerror}
                                    </div>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
*/
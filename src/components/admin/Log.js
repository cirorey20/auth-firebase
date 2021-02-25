import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

const Log = () => {
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handelEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password)
            history.push('/admin/mi-tienda-online');
        } catch (error) {
            setError('Credenciales Inconrrectas');
            setTimeout(() => setError(''), 2500);
        }
    }

    return(
        <div>
            <h2 className="text-center text-light p-4">Login</h2>
            
            <div className="row mt-3 justify-center">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <form
                            onSubmit={handleSubmit}
                            className="form-group"
                        >
                            <input
                                onChange={handelEmail}
                                className="form-control"
                                placeholder="Email"
                                type="email"
                            />
                            <input
                                onChange={handlePassword}
                                className="form-control mt-3"
                                placeholder="Contraseña"
                                type="password"
                            />
                            <input 
                                className="btn btn-success mt-3"
                                type="submit" 
                                value="Iniciar Sesion" 
                            />
                        </form>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center">
                {error && <p className="alert alert-danger" role="alert"> {error} </p>}
            </div>
        </div>
    )
}

export default Log;
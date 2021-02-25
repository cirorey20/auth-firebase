/*
import React, {useEffect, useState } from 'react';
import { auth } from '../../firebase-config';
import {useHistory} from 'react-router-dom';

const AdminIndex = () => {
    
    const historial = useHistory()
    const[usuario,setUsuario] = useState(null)
    useEffect( ()=>{
        auth.onAuthStateChanged ( (user)=>{
            if(user){
                setUsuario(user.email)
                console.log(user.email)
            }
        })
    },[])

    const CerrarSesion = () =>{
        auth.signOut()
        setUsuario(null)
        historial.push('/')
    }

    return (
        <div>
            {
                usuario ?
                (
                    <button
                        onClick={CerrarSesion}
                        className="btn btn-danger float-right"
                    >
                        Cerrar Sesion
                    </button>
                )
                :
                (
                    <span></span>
                )
            }
            <h2 className="text-center text-light p-4">Pagina de admin</h2>
            
        </div>
    )
}

export default AdminIndex;
*/
import React, {useState} from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminConfig = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
            setError('Error Del Servidor');
        }
    }
    
    return (
        <div>
            <div>
                {error && <p className="error">{error}</p>}
            </div>
           
           <h2 className="text-center text-light p-4">AdminConfig</h2>
           <h3 className="text-center text-light p-4">¿Como Estás, {currentUser.email}?</h3>
           <button
                onClick={handleLogout}
                className="btn btn-danger btn-block"
            >
                Cerrar Sesion

            </button>
            
        </div>
    )
}

export default AdminConfig;
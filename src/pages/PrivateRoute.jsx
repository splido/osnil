import React from 'react'
import { Outlet, Navigate,useNavigate } from 'react-router-dom'

function PrivateRoute({isAuthenticated,setIsAuthenticated}) {
    const navigate = useNavigate()
    const handleLogout = () => {
        // Perform logout logic, clear authentication state, and any cleanup tasks
        setIsAuthenticated(false);
        navigate('/')
        // Optionally, clear tokens or session data here
      };

    if (isAuthenticated){
        return(
        <>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <Outlet/>
        </>
        )
    } else{
        return <Navigate to='/login'/>
    }
}

export default PrivateRoute
import React, { Component } from 'react'
import { useAuth } from './Auth'
// import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function AuthWrapper(Component){
    return function WrappedComponent(props){
        let auth=useAuth()
        let location = useLocation();
        // let navigate = useNavigate();
        return <Component {...props} auth={auth} location={location}/>
    }
}

class RequireAuth extends Component {
     

  render() {
    if(!this.props.auth.user)
        return <Navigate to={'/login'} state={{path:this.props.location.pathname}}></Navigate>
    
    return this.props.children
  }
}

export default AuthWrapper(RequireAuth)
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../utils/Auth'


function NavbarWrapper(Component) {
  return function WrappedComponent(props) {
    const auth = useAuth();
    return <Component {...props} auth={auth} />;
  };
}


class Navbar extends Component {
    styles = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'black' : 'blue'
    })
    render() {
        return (
            <nav className='primary-nav'>
                {/* <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link> */}
                <NavLink to={'/'} style={this.styles}>Home</NavLink>
                <NavLink to={'/about'} style={this.styles}>About</NavLink>
                {/* <NavLink to={'/products'} style={this.styles}>Products</NavLink>
                <NavLink to={'/users'} style={this.styles}>Users</NavLink> */}
                <NavLink to={'/profile'} style={this.styles}>Profile</NavLink>
                {
                    !this.props.auth.user && <NavLink to={'/login'} style={this.styles}>Login</NavLink>
                }
            </nav>
        )
    }
}

export default NavbarWrapper(Navbar)
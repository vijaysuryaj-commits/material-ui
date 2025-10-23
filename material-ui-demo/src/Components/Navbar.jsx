import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Navbar.module.css'
class Navbar extends Component {
    styles = ({isActive}) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'black' : 'blue'
    })
    render() {
        return (
            <nav>
                {/* <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link> */}
                <NavLink to={'/'} style={this.styles}>Home</NavLink>
                <NavLink to={'/about'} style={this.styles}>About</NavLink>
                <NavLink to={'/products'} style={this.styles}>Products</NavLink>


            </nav>
        )
    }
}

export default Navbar
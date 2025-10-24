// import React, { Component, useContext } from 'react'
// import { createContext } from 'react'

// let AuthContext = createContext(null)

// export class AuthProvider extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             user: null
//         }
//     }
//     login = (user) => {
//         this.setState({ user: user })
//     }

//     logout = () => {
//         this.setState({ user: null })
//     }
//     render() {
//         let { children } = this.props
//         // let login = this.login
//         let logout = this.logout
//         return (
//             <AuthContext.Provider value={{
//                 user: this.state.user,
//                 login:this.login,
//                 logout
//             }}>{children}</AuthContext.Provider>
//         )
//     }
// }

// export const useAuth = () => {
//     return useContext(AuthContext)
// }


























import React, { Component } from 'react'
import { useContext, createContext } from 'react'

let AuthContext = createContext(null)

export class AuthProdvider extends Component {
    state = {
        user: null
    }

    login = (user) => {
        this.setState({ user })
    }

    logout = () => {
        this.setState({ user: null })
    }
    render() {
        return (
            <AuthContext.Provider value={{
                user: this.state.user,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const useAuth = () =>{
    return useContext(AuthContext)
}


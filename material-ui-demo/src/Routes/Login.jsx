import React, { Component } from 'react'
import { FormGroup, FormControl, FormControlLabel, Stack, Paper } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useAuth } from '../utils/Auth'
import { replace, useNavigate, useLocation } from 'react-router-dom'

function LoginWrapper(Component) {
  return function WrappedComponent(props) {
    const auth = useAuth();
    const navigate = useNavigate();
    let location = useLocation();
    return <Component {...props} auth={auth} navigate={navigate} location={location} />;
  };
}


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: ''
        }
    }
    
    location = this.props.location
    redirectPath = this.location.state?.path || '/'

    handleLogin = () => {
        this.props.auth.login(this.state.user)
        this.props.navigate(this.redirectPath,{replace:true})
    }
    render() {
        return (
            <Paper elevation={3}>
                <Stack spacing={4} direction={'column'}>
                    <TextField onChange={e => this.setState({ user: e.target.value })} label='Username ' variant='outlined' helperText='Enter your username' value={this.state.user}></TextField>
                    <TextField value={this.state.password} onChange={e => this.setState({ password: e.target.value })} label='Password' variant='outlined' type='password' helperText='Enter your password'></TextField>
                    <Button onClick={this.handleLogin} variant='contained'>Login</Button>
                </Stack>
            </Paper>
        )
    }
}

export default LoginWrapper(Login)
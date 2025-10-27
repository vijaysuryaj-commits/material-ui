import { Button, Paper, TextField, Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

import axiosInstance from './api/apiInstance'

class PostForm extends Component {
    state = {
        userId: 0,
        title: '',
        body: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    generateNewToken = () => {
        // return "New_Access_Token_123"    //if just this is used it wont wait for 5 seconds it logs undefined for new access token instead retur a promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("New_Access_Token_123")
            }, 5000)
        })
    }
    handleSubmit = async (e) => {
        const { userId, title, body } = this.state
        e.preventDefault();
        if (!userId) {
            alert("Please enter user Id");
        }
        if (!title) {
            alert("Please enter title ");
        }
        if (!body) {
            alert("Please enter body ");
        }
        console.log(userId, title, body)
        //using .then and .catch
        // axios.post(`https://jsonplaceholder.typicode.com/posts/`,this.state)
        // axios.put(`https://jsonplaceholder.typicode.com/posts/1`,this.state)
        // axios.delete(`https://jsonplaceholder.typicode.com/posts/1`)

        // .then(response => console.log(response))
        // .catch(error  => console.log(error)
        // )

        //using try catch and async & await-> best practice 
        // try {
        //     const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, this.state)
        //     console.log(response)
        // }
        // catch (error) {
        //     console.error(error)
        // }
        // manually adding Headers
        // const token = "Fake_Access_Token"
        // try {
        //     const response = await axios.post(
        //         `https://jsonplaceholder.typicode.com/posts/`,
        //         this.state,
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     )
        //     console.log(response);

        // } catch (error) {
        //     console.log(error)
        // }

        //manually refreshng the token
        // const token = 'Expired_Token_123'
        // try {
        //     if (token === 'Expired_Token_123') {
        //         const error = new Error("Token expired");
        //         error.response = { status: 401 }
        //         throw error;
        //     }
        //     const response = await axios.post(
        //         `https://jsonplaceholder.typicode.com/posts`,
        //         this.state,
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     );
        //     console.log(response);
        // }
        // catch (error) {
        //     if (error.response && error.response.status === 401) {
        //         console.warn("Token expired");
        //         try {
        //             console.log("Trying generating new token")
        //             const newAccessToken = await this.generateNewToken();
        //             console.log("New access token generated", newAccessToken)
        //             const retry_response = await axios.post(`https://jsonplaceholder.typicode.com/posts`,
        //                 this.state,
        //                 {
        //                     headers: {
        //                         Authorization: `Bearer ${newAccessToken}`,
        //                         "Content-Type": 'application/json'
        //                     }
        //                 }
        //             );
        //             console.log(retry_response)
        //         }
        //         catch (refreshError) {
        //             console.error("REfresh token expired")
        //             alert("Login expired please login again")

        //         }
        //     }
        // }

        //by using axios interceptors  for token management
        // try{
        //     const response = await axiosInstance.post('/posts',this.state)
        //     console.log(response)
        // }catch(error){
        //     console.error(error)
        // }

        //by using response interceptors -> refresh tokens
        try {
            const response = await axiosInstance.post('/posts', this.state)
            console.log(response)
        } catch (error) {
            console.error(error)
        }


    }

    render() {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Paper elevation={3} sx={{
                    width: '700px',
                    padding: '30px'
                }}>
                    <Typography variant='h4' fontFamily={'times '}>Form</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: '20px',
                        margin: '0 auto',
                        gap: '20px'
                    }} spacing={2} component={'form'} >
                        <TextField label='User ID'
                            name='userId'
                            variant='outlined'
                            value={this.state.userId}
                            onChange={this.handleChange} fullWidth>

                        </TextField>
                        <TextField label='Title'
                            name='title'
                            variant='outlined'
                            value={this.state.title}
                            onChange={this.handleChange} fullWidth>
                        </TextField>
                        <TextField label='Body'
                            name='body'
                            variant='outlined'
                            value={this.state.body}
                            onChange={this.handleChange} fullWidth
                        ></TextField>
                        <Button variant='contained' type='submit' onClick={this.handleSubmit}>Submit</Button>
                    </Box>
                </Paper>
            </Box>
        )
    }
}

export default PostForm
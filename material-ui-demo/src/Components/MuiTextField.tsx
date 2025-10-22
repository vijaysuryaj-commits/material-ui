
import { Stack, TextField, InputAdornment, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
export const MuiTextField = () => {
    const [showPass, setShowPass] = useState(false)

    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <TextField label="name" variant='outlined' /> {/*default varian is outlined*/}
                <TextField label="name" variant='filled' />
                <TextField label="name" variant='standard' />

                <TextField label="secondary color" variant='outlined' size='small' color='secondary' />

            </Stack>

            <Stack spacing={2} direction={'row'}>
                <TextField label='form field' required></TextField>
                <TextField label='Password' type='password' helperText='Do not share your password' required></TextField>
                <TextField label='Password' type='password' helperText='Do not share your password' disabled ></TextField>
                <TextField label='Read only' helperText='cant modify read only' inputProps={{ readOnly: true }} ></TextField>

            </Stack>

            <Stack spacing={2} direction={'row'}>
                <TextField label='amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />
                <TextField label='weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }} />

            </Stack>

            <Stack spacing={2} direction={'row'}>

                <TextField type={showPass ? 'text' : 'password'} required label='Password' InputProps={{
                    endAdornment: <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPass(!showPass)} aria-label={showPass ? 'Hide password' : 'Show password'}>
                            {
                                showPass ? <VisibilityOffIcon /> : <VisibilityIcon />
                            }
                        </IconButton>
                    </InputAdornment>
                }}></TextField>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <TextField label='Password'
                    type='password'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? "Required" : "Do not share your password"} 
                    required>

                </TextField>
            </Stack>
        </Stack>

    )
}

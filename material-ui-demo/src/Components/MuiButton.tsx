// import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
// import HomeIcon from '@mui/icons-material/Home';
// import { useState } from 'react';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

// const MuiButton = () => {

//     const [formats, setFormats] = useState<String[]>([])
//     console.log({
//         formats,
//     })
//     const handleToggle = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
//         setFormats(updatedFormats)
//     }
//     return (
//         <Stack spacing={4}>
//             <Stack spacing={2} direction={'row'}>
//                 <Button variant='text' href='https://google.com'>Text</Button>
//                 <Button variant='contained'>contained</Button>
//                 <Button variant='outlined'>outlined</Button>
//             </Stack>
//             <Stack spacing={2} direction='row'>
//                 <Button variant='contained' color='primary'>Primary</Button>
//                 <Button variant='contained' color='secondary'>secondary</Button>
//                 <Button variant='contained' color='warning'>warning</Button>
//                 <Button variant='contained' color='error'>error</Button>
//                 <Button variant='contained' color='success'>success</Button>
//                 <Button variant='contained' color='info'>info</Button>


//             </Stack>

//             <Stack spacing={2} display={'block'} direction={'row'}>
//                 <Button variant='contained' size='small'>Small</Button>
//                 <Button variant='contained' size='medium'>medium</Button>
//                 <Button variant='contained' size='large'>large</Button>
//             </Stack>

//             <Stack spacing={2} direction={'row'}>
//                 <Button variant='contained' startIcon={<HomeIcon />} disableElevation onClick={() => alert("Clciked")}>Home</Button>{/*button looks like elevated use this to disable*/}
//                 <Button variant='contained' endIcon={<HomeIcon />} disableRipple>Home</Button> {/*ripple effect when button is clicked*/}

//                 <IconButton aria-label='home' onClick={() => alert("Clciked")}>
//                     <HomeIcon />
//                 </IconButton>

//                 <IconButton aria-label='home' color='secondary' size='small'>
//                     <HomeIcon />
//                 </IconButton>
//             </Stack>

//             {/* ButtonGroup -> group buttons
//             -> give common variant
//             ->can have orientation color and sizes
//             ->onClick should be given for each button */}

//             <Stack direction={'row'}>
//                 <ButtonGroup variant='contained'>
//                     <Button >Left</Button>
//                     <Button >Center</Button>
//                     <Button >Right</Button>
//                 </ButtonGroup>
//             </Stack>

//             <Stack direction={'row'}>
//                 <ButtonGroup variant='outlined' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
//                     <Button >Left</Button>
//                     <Button >Center</Button>
//                     <Button >Right</Button>
//                 </ButtonGroup>
//             </Stack>

//             <Stack direction={'row'}>
//                 <ButtonGroup variant='text'>
//                     <Button onClick={() => alert("left")}>Left</Button>
//                     <Button onClick={() => alert("center")}>Center</Button>
//                     <Button onClick={() => alert("right")}>Right</Button>
//                 </ButtonGroup>
//             </Stack>
//             <Stack direction={'row'}>
//                 <ButtonGroup >
//                     <Button variant='text' onClick={() => alert("left")}>Left</Button>
//                     <Button variant='contained' onClick={() => alert("center")}>Center</Button>
//                     <Button variant='outlined' onClick={() => alert("right")}>Right</Button>
//                 </ButtonGroup>
//             </Stack>

//             <Stack direction={'row'}>
//                 <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleToggle} >
//                     <ToggleButton value={'bold'} aria-label='bold'>
//                         <FormatBoldIcon />
//                     </ToggleButton>
//                     <ToggleButton value={'italic'} aria-label='italic'>
//                         <FormatItalicIcon />

//                     </ToggleButton>
//                     <ToggleButton value={'underlined'} aria-label='underlined'>
//                         <FormatUnderlinedIcon />
//                     </ToggleButton>
//                 </ToggleButtonGroup>
//             </Stack>
//         </Stack >
//     )
// }

// export default MuiButton

//toggle only one option at a time

import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {

    const [formats, setFormats] = useState<String | null>(null)
    console.log({
        formats,
    })
    const handleToggle = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>

            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleToggle} size='small' color='success' orientation='vertical' exclusive>
                    <ToggleButton value={'bold'} aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic'>
                        <FormatItalicIcon />

                    </ToggleButton>
                    <ToggleButton value={'underlined'} aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack >
    )
}

export default MuiButton
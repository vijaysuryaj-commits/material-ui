
// import Checkbox from '@mui/material/Checkbox';

// export default function Checkboxes() {
//     return (
//         <div>
//             <Checkbox defaultChecked />
//             <Checkbox />
//             <Checkbox disabled />
//             <Checkbox disabled checked />
//         </div>
//     );
// }

// import React, { Component } from 'react'
// import Checkbox from '@mui/material/Checkbox';

// class CheckBox extends Component {
//     render() {
//         return (
//             <div>
//                 <Checkbox defaultChecked />
//                 <Checkbox />
//                 <Checkbox disabled />
//                 <Checkbox disabled checked />
//             </div>
//         )
//     }
// }

// export default CheckBox



// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// export default function CheckboxLabels() {
//     return (
//         <FormGroup>
//             <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//             <FormControlLabel required control={<Checkbox />} label="Required" />
//             <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//         </FormGroup>
//     );
// }

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Component } from 'react';
class CheckboxLabels extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked size='small' icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>} label="favourite" />
                    <FormControlLabel control={<Checkbox defaultChecked size='small' icon={<BookmarkBorderIcon />}checkedIcon={<BookmarkIcon />}/>}label="favourite" />

                    <FormControlLabel required control={<Checkbox sx={{color:'green'}}/>} label="Required" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>
            </div>
        )
    }
}

export default CheckboxLabels
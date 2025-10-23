// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import type { SelectChangeEvent } from '@mui/material/Select';
// import { Component } from 'react';

// interface BasicSelectState {
//   age: string;
// }

// class BasicSelect extends Component<{}, BasicSelectState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = { age: '' };
//   }

//   handleChange = (event: SelectChangeEvent) => {
//     this.setState({ age: event.target.value });
//   };

//   render() {
//     const { age } = this.state;

//     return (
//       <Box sx={{ minWidth: 120 }}>
//         <FormControl fullWidth>
//           <InputLabel id="select-label">Age</InputLabel>
//           <Select

//             value={age}
//             label="Age"
//             onChange={this.handleChange}
//           >
//             <MenuItem value="10">Ten</MenuItem>
//             <MenuItem value="20">Twenty</MenuItem>
//             <MenuItem value="30">Thirty</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//     );
//   }
// }

// export default BasicSelect;

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { Component } from 'react';
import { FormHelperText } from '@mui/material';

interface BasicSelectState {
    age: string;
}

class BasicSelect extends Component<{}, BasicSelectState> {
    constructor(props: {}) {
        super(props);
        this.state = { age: '' };
    }

    handleChange = (event: SelectChangeEvent) => {
        this.setState({ age: event.target.value });
    };

    render() {
        const { age } = this.state;

        return (
            //   <Box sx={{ minWidth: 120 }}>
            //     <FormControl variant='standard' fullWidth>
            //       <InputLabel id="select-label">Age</InputLabel>
            //       <Select 
            //         autoWidth
            //         value={age}
            //         label="Age"
            //         onChange={this.handleChange}
            //       >
            //         <MenuItem value="10">Ten</MenuItem>
            //         <MenuItem value="20">Twenty</MenuItem>
            //         <MenuItem value="30">Thirty</MenuItem>
            //       </Select>
            //     </FormControl>
            //   </Box>
            <div>
                {/* <FormControl sx={{ m: 1, minWidth: 80 }}> */}
                {/* <FormControl sx={{ m: 1, minWidth: 100 }} size='medium'>

        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="select-autowidth-label"
          id="select-autowidth"
          value={age}
          onChange={this.handleChange}
        //   autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl> */}

                {/* <FormControl sx={{ m: 1, minWidth: 100 }} size='medium' disabled error>

        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="select-autowidth-label"
          id="select-autowidth"
          value={age}
          onChange={this.handleChange}
        //   autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
          
        </Select>
        <FormHelperText>error</FormHelperText>
      </FormControl> */}

                <FormControl sx={{ m: 1, minWidth: 100 }} size='medium' required>

                    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                        labelId="select-autowidth-label"
                        id="select-autowidth"
                        value={age}
                        onChange={this.handleChange}
                        //   autoWidth
                        label="Age"
                        inputProps={{ readOnly: true }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>

                    </Select>
                    <FormHelperText>error</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default BasicSelect;

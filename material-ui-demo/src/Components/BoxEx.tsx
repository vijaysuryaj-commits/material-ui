import { Box } from "@mui/material";
import { Component } from "react";
import {ThemeProvider} from "@mui/material";
class BoxEx extends Component {
    render() {

        return (
            // <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            //     This Box renders as an HTML section element.
            // </Box>
            <ThemeProvider
                theme={{
                    palette: {
                        primary: {
                            main: '#007FFF',
                            dark: '#0066CC',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />
            </ThemeProvider>

        );
    }
}

export default BoxEx
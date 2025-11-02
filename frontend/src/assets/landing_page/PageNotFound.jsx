import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

const PageNotFound = () => {
    return (
        <Box sx={{padding:'70px',paddingLeft:'85px'}}>
            <h3>Error 404</h3>
            <Typography>The page you are looking <br />
            for does not exits!</Typography>
        </Box>
    );
}

export default PageNotFound;

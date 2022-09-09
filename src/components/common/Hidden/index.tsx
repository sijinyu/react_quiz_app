import { Box } from '@mui/material';
import React from 'react';

interface HiddenProps { 
    children:React.ReactNode
    use : boolean
}

function Hidden({children, use = true}:HiddenProps) {
    const handleinVisible = (inVisible:boolean) => inVisible ? 'none' : 'flex'
    
	return (
		<Box display={handleinVisible(use)}>
            {children}
        </Box>
	);
}

export default Hidden;

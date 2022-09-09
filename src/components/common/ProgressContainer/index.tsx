import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function ProgressContainer() {
  return (
    <Container sx={{display:'flex', alignItems:'center', justifyContent:'center',minHeight:'100vh'}}>
      <CircularProgress />
    </Container>
  );
}
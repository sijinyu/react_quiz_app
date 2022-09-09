import React  from 'react';
import {  Box, Stack, Typography } from '@mui/material';
import { useResult } from './hooks/useResult';
import SButton from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import Chart from './Chart';


export default function Result() {
    const { score , time } = useResult()
    const navigate = useNavigate();
    
	return (
		<Stack minWidth="100%">
            <Box mb={5}>
            <Chart />
            </Box>
            <Typography variant='h3'>정답 갯수 : {score.correct}</Typography>
            <Typography variant='h3'>오답 갯수 : {score.inCorrect}</Typography> 
            <Typography variant='h3'>퀴즈를 마칠 때까지 소요된 시간 : {time.hour}시 {time.min}분 {time.sec}초</Typography>
            <Stack alignItems="center" pt={4}>
            <SButton onClick={()=>navigate('/', {replace:true})} variant="outlined" >처음부터 다시풀기</SButton>
            </Stack>
		</Stack>
	)
}


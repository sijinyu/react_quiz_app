import React from 'react';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SButton from '@/components/common/Button';
import Header from '@/components/common/Header';


function Start() {
	const navigate = useNavigate()
	const handleQuizStartClick = () => navigate('/quiz')

	return (
		<Stack alignItems="center" rowGap={4}>
            <Header />
			<SButton variant="contained" onClick={handleQuizStartClick}>퀴즈 풀기</SButton>
		</Stack>
	);
}

export default Start;

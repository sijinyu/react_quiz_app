import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useQuizs } from './hooks/useQuizs';
import Header from '../../common/Header';
import SButton from '../../common/Button'
import Hidden from '../../common/Hidden';


function Quizing() {

    const {currentQuiz  ,handleNextClick, handleQuizClick, handleReQuizClick, quizButtonDisabled, inVisibleNextButton,  solveCount, totalCount , resultMessage} = useQuizs()
    
	return (
		<Stack minWidth="100%">
            <Header><Typography variant='h3'> {`${solveCount}/${totalCount}`}</Typography></Header>
            <Box mb={4}>
                <Typography variant='h3' textAlign="center" >{currentQuiz?.question}</Typography>
            </Box>
            <Grid container spacing={4} justifyContent="space-evenly">
                {currentQuiz?.quizList.map((quiz)=>{
                    return (
                        <Grid xs={6} key={quiz} textAlign="center">
                            <SButton variant='outlined'  color='success' disabled={quizButtonDisabled}  onClick={()=> handleQuizClick(quiz , currentQuiz.answer)}>{quiz}</SButton>
                        </Grid>
                    )
                })}
            </Grid>
            <Stack alignItems="center" pt={4}>
                <Box mb={3}>
                <Typography variant='h6'>{resultMessage}</Typography>
                </Box>
                <Hidden use={inVisibleNextButton}>
                    <Stack columnGap={2} direction="row">
                    <SButton variant='outlined' color='secondary' onClick={()=> handleReQuizClick()}>다시풀기</SButton>
                    <SButton variant='outlined'  onClick={()=> handleNextClick(currentQuiz!.id)}>다음문제</SButton>
                    </Stack>
                </Hidden>
            </Stack>
		</Stack>
	);
}

export default Quizing;

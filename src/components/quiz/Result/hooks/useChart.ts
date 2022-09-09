import React, { useState , useEffect } from 'react'
import localStorage from '@/common/utils/localStorage';
import { IChartData, IQuizResult } from '../../types/index';


export const useChart = () => {
    const result:IQuizResult = localStorage.getLocalStorage('quiz');
    const [chartData , setChartData] = useState<IChartData[]>([]);
    
    useEffect(()=> {
        setChartData([{angle: result.quiz.score.correct, label:'정답'}, {angle: result.quiz.score.inCorrect, label:'오답'}])
    },[])
    return {
        chartData,
    }
    
}
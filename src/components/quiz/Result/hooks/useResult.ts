import React, { useState , useEffect } from 'react'
import localStorage from '../../../../common/utils/localStorage';
import { IQuizResult } from '../../types/index';


export const useResult = () => {
    const result:IQuizResult = localStorage.getLocalStorage('quiz');
    
    return {
        score : result.quiz.score,
        time : result.quiz.time,
    }
    
}
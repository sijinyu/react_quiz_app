import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IQuizData , IQuizList} from '../../types/index';
import helper from '@/common/utils/helper';
import localStorage from '@/common/utils/localStorage';

export const useQuizs = (quizs:[]) => {
  let currentSelectQuizValue = useRef('');
  let currentSelectQuizAnswer= useRef('');
  let startTime = useRef(0);
  let endTime = useRef(0);

  const navigate = useNavigate();
  const [quizList,setQuizList] = useState<IQuizList[]>([])
  const [currentQuiz, setCurrentQuiz] = useState<IQuizList>()
  const [quizButtonDisabled, setQuizButtonDisabled] = useState(false)
  const [solveCount , setSolveCount] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [inCorrectCount, setIncorrectCount] = useState(0);
  const [inVisibleNextButton , setInvisibleNextButton] = useState(true)
  const [resultMessage, setResultMessage] = useState('')
  
  const score = {
    correct : correctCount ,
    inCorrect : inCorrectCount
  }
  
  const QuizStartTime = () => {
    startTime.current = new Date().getTime();
  }
  const QuizEndTime = () => {
    endTime.current = new Date().getTime();
  }

  const initQuizButtonAndMessage = () => {
    setInvisibleNextButton(true)
    setQuizButtonDisabled(false)
    setResultMessage('')
  }

  const handleQuizData = (quizs:[]) => {
    
    const quizAndAnswer = quizs.reduce<IQuizList[]>((arr,quiz:IQuizData,index)=>  {
      arr.push({
        id : index,
        question: quiz.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'"),
        quizList : helper.shuffle([...quiz.incorrect_answers, quiz.correct_answer]),
        answer : quiz.correct_answer
      })
      return arr
    },[])
    setQuizList(quizAndAnswer)
    setCurrentQuiz(quizAndAnswer[0])
  }

  
  const handleQuizClick = (quizValue:string, answer:string) => {
    quizValue === answer ? setResultMessage('맞았습니다.') :  setResultMessage('틀렸습니다.')
    currentSelectQuizValue.current = quizValue
    currentSelectQuizAnswer.current = answer
    setInvisibleNextButton(false)
    setQuizButtonDisabled(true)
  }

  const handleNextClick = (id:number) => {
    currentSelectQuizValue.current === currentSelectQuizAnswer.current ?  setCorrectCount(correctCount + 1) :  setIncorrectCount(inCorrectCount + 1) 
    setSolveCount(solveCount + 1)
    setCurrentQuiz(quizList[++id])
    initQuizButtonAndMessage()
    if(quizList.length === id) {
      QuizEndTime()
      localStorage.setLocalStorage('quiz',{
        score,
        time : helper.date.getDateIntervalHms(endTime.current,startTime.current)
      })
      navigate('/result')
    }
  }

  const handleReQuizClick = () => {
    initQuizButtonAndMessage()
  }


  useEffect(()=> {
    QuizStartTime();
    handleQuizData(quizs)
  },[quizs])

	return {
    currentQuiz,
    solveCount,
    totalCount: quizList.length,
    handleQuizClick,
    handleNextClick,
    handleReQuizClick,
    quizButtonDisabled,
    inVisibleNextButton,
    resultMessage,
	};
};



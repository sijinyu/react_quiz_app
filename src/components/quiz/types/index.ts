export interface IQuizData {
    id:number,
    category:string,
    type: string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[],
}

export interface IQuizList {
    id: number,
    question:string,
    quizList:Array<string>,
    answer: string,
}

export interface IQuizResult {
    quiz : {
        time : {
            hour : number,
            min : number,
            sec : number
        },
        score: {
        correct : number,
        inCorrect: number,
    }
    }
}

export interface IChartData {
    angle : number,
    label:string,
}
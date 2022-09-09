import api from "@/common/api";

const QuizDataService = {
    getAll : api.get('/', { params : {amount : 10, type: 'multiple'} })
}

export default QuizDataService;

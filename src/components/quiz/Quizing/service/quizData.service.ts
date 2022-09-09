import api from "../../../../common/api";

const QuizDataService = {
    getAll : async ()=> await (await api.get('/', { params : {amount : 10, type: 'multiple'} })).data
}

export default QuizDataService;

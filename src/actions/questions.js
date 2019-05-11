export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export const saveQuestion = (question) => {
    return {    
        type: SAVE_QUESTION,
        question,
    }
}

export const saveQuestionAnswer = (answer) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        answer,
    }
}
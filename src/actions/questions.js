import { _saveQuestion } from '../utils/_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export const handleSaveQuestion = (optionOneText, optionTwoText, history) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,
        })
        .then((question) => {
            dispatch(addQuestion(question))
        })
        .then(() => history.push('/'))
    }
}

export const addQuestion = (question) => {
    return {    
        type: ADD_QUESTION,
        question,
    }
}

export const saveQuestionAnswer = (answer) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        answer,
    }
}
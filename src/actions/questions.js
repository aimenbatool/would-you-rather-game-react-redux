import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { addAnswerAgainstUser } from './users';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'SAVE_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

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

export const handleAddAnswer = (authedUser, qid, answer) => {
    return (dispatch) => {
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
        .then(() => {
            dispatch(saveQuestionAnswer(authedUser, qid, answer))
            dispatch(addAnswerAgainstUser(authedUser, qid, answer))
        })
    }
}

export const saveQuestionAnswer = (authedUser, qid, answer) => {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}
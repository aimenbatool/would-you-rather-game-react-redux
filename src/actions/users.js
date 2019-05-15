export const GET_USERS = 'GET_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        users,
    }
}

export const addAnswerAgainstUser = (authedUser, qid, answer) => {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer,
    }
}

export const addQuestionAgainstUser = (qid, authedUser) => {
    return {
        type: ADD_QUESTION_TO_USER,
        qid,
        authedUser,
    }
}
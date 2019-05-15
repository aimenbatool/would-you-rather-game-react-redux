export const GET_USERS = 'GET_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';

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
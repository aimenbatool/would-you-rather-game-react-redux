import { GET_USERS, ADD_ANSWER_TO_USER } from '../actions/users';

export const users = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS :
            return {
                ...state,
                ...action.users,
            } 
        case ADD_ANSWER_TO_USER :
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    answers : {
                        ...state[authedUser].answers,
                        [qid] : answer,
                    }
                }
            }
        default :
            return state;
    }
}
export default users;
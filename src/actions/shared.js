import { getQuestions } from '../actions/questions';
import { getUsers } from '../actions/users';
import { _getUsers, _getQuestions } from '../utils/_DATA';

export const HandleInitialData = ( ) => {
    return (dispatch) => {
        Promise.all([_getUsers, _getQuestions])
            .then( data => {
                console.log(data, 'initial data')
                dispatch(getUsers(data[0]))
                dispatch(getQuestions(data[1]))
            } )
        }
    }

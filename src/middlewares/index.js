import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const middleware = applyMiddleware(ReduxThunk);

export default middleware;
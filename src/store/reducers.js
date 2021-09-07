import {combineReducers} from 'redux';

import counterReducer, {NAME as counterName} from '../features/counter';
import usersReducer, {NAME as usersName} from '../features/users';
import usersReduxReducer from '../features/usersRedux';
import { NAME as usersReduxName } from '../features/usersRedux/actionTypes'

export default () => 
    combineReducers({
        [counterName]: counterReducer,
        [usersName]: usersReducer,
        [usersReduxName]: usersReduxReducer,
    });
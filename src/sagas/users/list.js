import { call, put } from 'redux-saga/effects'

import { actionTypes as userActions } from '../../features/users';

export default function* tryUsersList() {
    try {
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: userActions.LIST_SUCCESS, data })
        yield put({ type: 'myTest', some: 'test' })
    } catch (e) {
        yield put({ type: userActions.LIST_FAILED })
    }
}

export function* someTest() {
    yield put({ type: 'newTest', some: 'root' })
}
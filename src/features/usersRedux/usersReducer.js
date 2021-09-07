import actionTypes from './actionTypes'

// Initial State:
const initialState = {
    dataList: [],
    isLoading: false,
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LIST_TRY:
            return { ...state, isLoading: true }
        case actionTypes.LIST_FAILED:
            return { ...state, isLoading: false }
        case actionTypes.LIST_SUCCESS:
            return { ...state, isLoading: false, dataList: action.data }
        default:
            return state
    }
}

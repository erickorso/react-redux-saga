import getOr from "lodash/fp/getOr";
import { NAME } from './actionTypes'

export const getUsersDataListState = getOr(null, `[${NAME}].dataList`)
export const getUsersDataListLoadingState = getOr(null, `[${NAME}].isLoading`)

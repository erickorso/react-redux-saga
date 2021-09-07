import { listRequest, listResponse, listError } from './usersAction'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const list = (dispatch) => {
    listRequest(dispatch);
    fetch(URL)
        .then((response) => response.json())
        .then((users) => {
            if (users[0]) {
                listResponse(users, dispatch);
            } else {
                listError(dispatch);
            }
            return;
        })
        .catch((error) => listError(dispatch))
}
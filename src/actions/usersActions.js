import * as types from './actionTypes';
import usersApi from '../api/usersApi';

export function loadUsers() {
    return function(dispatch) {
        return usersApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function updateUser(user) {
    return function (dispatch) {
        return usersApi.updateUser(user).then(responseUser => {
            dispatch(updateUserSuccess(responseUser));
        }).catch(error => {
            throw(error);
        });
    };
}

export function updateUserSuccess(user) {
    return {type: types.UPDATE_USER_SUCCESS, user};
}
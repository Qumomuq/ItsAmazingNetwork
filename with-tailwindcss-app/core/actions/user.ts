import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
import {wrapUrl} from "../../helpers/urlWrapper";
import {apiUrl} from "../../config";
import {authHeader} from "../../helpers/AuthHelper";

export const getUserData = (user_id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.FETCH_USERS, ts: Date.now()});
        const data = await axios.get(
            wrapUrl(`${apiUrl}/api/user/${user_id}`),
            {
                headers: {
                    ...authHeader(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response) {
            return dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                user_data: response.data.user_data,
                critical_rights: response.data.critical_rights,
                critical_rights_subject: response.data.critical_rights_subject,
                data_rights: response.data.data_rights,
                data_rights_subject: response.data.data_rights_subject,
                ts: Date.now()
            })
        }).catch((e) => {
            return dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: e.toString(),
                ts: Date.now()
            })
        })
        return data
    }
}

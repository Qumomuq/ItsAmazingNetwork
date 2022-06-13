import {UserAction, UserActionTypes, UserState} from "../../types/user";
import {CriticalRight} from "../../types/rights";

const initialState: UserState = {
    user_data: null,
    critical_rights: [],
    critical_rights_subject: [],
    data_rights: [],
    data_rights_subject: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {critical_rights: [], user_data: null, data_rights: [],
                data_rights_subject: [], critical_rights_subject: [], loading: true, error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, data_rights: action.data_rights,
                data_rights_subject: action.data_rights_subject, critical_rights_subject: action.critical_rights_subject, critical_rights: action.critical_rights, user_data: action.user_data}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, data_rights: [],
                data_rights_subject: [], critical_rights_subject: [], critical_rights: [], user_data: null}
        default:
            return state
    }
}
import {UserAction, UserActionTypes, UserState} from "../../types/user";
import {LicenseActionTypes, LicensesAction, LicensesState} from "../../types/licenses";

const initialState: LicensesState = {
    licenses_data: [],
    loading: false,
    error: null
}

export const licenseReducer = (state = initialState, action: LicensesAction): LicensesState => {
    switch (action.type) {
        case LicenseActionTypes.FETCH_LICENSES:
            return {loading: true, error: null, licenses_data: []}
        case LicenseActionTypes.FETCH_LICENSES_SUCCESS:
            return {loading: false, error: false, licenses_data: action.payload}
        case LicenseActionTypes.FETCH_LICENSES_ERROR:
            return {loading: false, error: action.payload, licenses_data: []}
        default:
            return state
    }
}
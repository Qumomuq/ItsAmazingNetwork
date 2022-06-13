import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "../../helpers/urlWrapper";
import {apiUrl} from "../../config";
import {authHeader} from "../../helpers/AuthHelper";
import {License, LicenseActionTypes, LicensesAction} from "../../types/licenses";
import {ErrorBackend} from "../../components/interfaces/basicObjects";

interface LicensesResponse {
    success: boolean,
    data: License[]
}

interface LicensesResponseError {
    success: boolean,
    data: ErrorBackend[]
}

export const getLicensesData = () => {
    return async (dispatch: Dispatch<LicensesAction>) => {
        dispatch({type: LicenseActionTypes.FETCH_LICENSES, ts: Date.now()});
        const data = await axios.get(
            wrapUrl(`${apiUrl}/api/me/license/memosync`),
            {
                headers: {
                    ...authHeader(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response: AxiosResponse<LicensesResponse>) {
            console.log(response.data)
            return dispatch({
                type: LicenseActionTypes.FETCH_LICENSES_SUCCESS,
                payload: response.data.data,
                ts: Date.now()
            })
        }).catch((e: AxiosError<LicensesResponseError>) => {
            return dispatch({
                type: LicenseActionTypes.FETCH_LICENSES_ERROR,
                payload: e.response?.data.data?.[0]?.message,
                ts: Date.now()
            })
        })
        return data
    }
}

import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "../../helpers/urlWrapper";
import {apiUrl} from "../../config";
import {ErrorBackend} from "../../components/interfaces/basicObjects";
import {Reg, RegAction} from "../../types/reg";
import {RegActionTypes} from "../../types/reg";

interface RegResponse {
    preuser: { preuser: { success: any, data: any } }
}

interface RegResponseError {
    success: boolean,
    data: ErrorBackend[]
}

export const getRegUser = ( username:string,password: string,email: string,first_name:string,last_name:string,phone:string) => {
    return async (dispatch: Dispatch<RegAction>) => {
        dispatch({type: RegActionTypes.CREATE_REG, ts: Date.now()});
        const data = await axios.post(
            wrapUrl(`${apiUrl}/accounts/users/`),
            JSON.stringify({username,password,email,first_name,last_name,phone}),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response: AxiosResponse<RegResponse>) {
            console.log(response.data)
            return dispatch({
                type: RegActionTypes.CREATE_REG_SUCCESS,
                payload: response.data.preuser,
                ts: Date.now()
            })
            // ).then(function (response: AxiosResponse<RegResponse>) {
            //     console.log('ttttt')
            //     return dispatch({
            //         type: RegActionTypes.CREATE_REG_SUCCESS,
            //         payload: response.data,
            //     })
        }).catch((e: AxiosError<RegResponseError>) => {
            return dispatch({
                type: RegActionTypes.CREATE_REG_ERROR,
                payload: e.toString(),
                ts: Date.now()
            })
        })
        return data
    }
}

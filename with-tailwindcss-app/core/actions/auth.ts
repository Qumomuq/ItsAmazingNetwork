
import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "../../helpers/urlWrapper";
import {apiUrl} from "../../config";
import {authHeader, setAuthToken} from "../../helpers/AuthHelper";
import {ErrorBackend} from "../../components/interfaces/basicObjects";
import {Auth, TokenAction, TokenActionTypes} from "../../types/auth";
import {number} from "prop-types";

interface AuthResponse {
    token: string
}

interface AuthResponseError {
    success: boolean,
    data: ErrorBackend[]
}

export const getAuthUser = ( password: string,email: string) => {
    return async (dispatch: Dispatch<TokenAction>) => {
        dispatch({type: TokenActionTypes.FETCH_TOKEN, ts: Date.now()});
        const data = await axios.post(
            wrapUrl(`${apiUrl}/token/login/`),
            JSON.stringify({password,email }),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response: AxiosResponse<AuthResponse>) {
            console.log(response.data.token)
            setAuthToken(response.data.token)
            return dispatch({
                type: TokenActionTypes.FETCH_TOKEN_SUCCESS,
                payload: response.data,
                ts: Date.now()
            })

        }).catch((e: AxiosError<AuthResponseError>) => {
            return dispatch({
                type: TokenActionTypes.FETCH_TOKEN_ERROR,
                payload: e.toString(),
                ts: Date.now()
            })
        })
        return data
    }
}

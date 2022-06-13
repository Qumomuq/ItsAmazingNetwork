import {ErrorBackend} from "../components/interfaces/basicObjects";

export interface License {
    license_id: number,
    user_id: number,
    subdomain: string,
    organization: string,
    licenses: number,
    last_update: number,
    price_per_license: 100,
    product_version: "0.0.1",
    status: 1
}


export interface LicensesState {
    licenses_data: License[]
    loading: boolean;
    error: null | boolean | ErrorBackend[] | ErrorBackend | undefined | string;
}

export enum LicenseActionTypes {
    FETCH_LICENSES = 'FETCH_LICENSES',
    FETCH_LICENSES_SUCCESS = 'FETCH_LICENSES_SUCCESS',
    FETCH_LICENSES_ERROR = 'FETCH_LICENSES_ERROR',
}
interface FetchLicensesAction {
    type: LicenseActionTypes.FETCH_LICENSES;
}

interface FetchLicensesSuccessAction {
    type: LicenseActionTypes.FETCH_LICENSES_SUCCESS;
    payload: License[]
}
interface FetchLicensesErrorAction {
    type: LicenseActionTypes.FETCH_LICENSES_ERROR;
    payload: string | undefined;
}
export type LicensesAction = FetchLicensesAction | FetchLicensesErrorAction | FetchLicensesSuccessAction
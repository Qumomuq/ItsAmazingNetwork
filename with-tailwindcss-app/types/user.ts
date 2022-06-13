import {CriticalRight} from "./rights";
import {Entity} from "../components/interfaces/basicObjects";

export interface UserState {
    user_data: any,
    critical_rights: CriticalRight[],
    critical_rights_subject: CriticalRight[],
    data_rights: DataRight[],
    data_rights_subject: DataRight[],
    loading: boolean;
    error: null | string;
}
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

export interface DataRight {
    rights: number
    entity: Entity
    entity_to: Entity
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    critical_rights: CriticalRight[]
    critical_rights_subject: CriticalRight[]
    data_rights: DataRight[],
    data_rights_subject: DataRight[],
    user_data: any
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction

export interface AuthAction {
    type: any;
    payload: "qwertryuyi";
}
export interface AlertAction {
    type: any;
    payload: "dtrfvygbuh";
}
export interface RightsState {
    rightsCritical: userAndHisRights,
    allLoading: boolean
}
export enum RightsActionTypes {
    TRY_GET_MY_RIGHTS_CRITICAL = 'TRY_GET_MY_RIGHTS_CRITICAL',
    GET_MY_RIGHTS_CRITICAL_SUCCESS = 'GET_MY_RIGHTS_CRITICAL_SUCCESS',
    GET_MY_RIGHTS_CRITICAL_FAIL = 'GET_MY_RIGHTS_CRITICAL_FAIL',
}

interface TryGetMyRightsCriticalAction {
    type: RightsActionTypes.TRY_GET_MY_RIGHTS_CRITICAL;
}

interface GetMyRightsCriticalSuccessAction {
    type: RightsActionTypes.GET_MY_RIGHTS_CRITICAL_SUCCESS;
    payload: userAndHisRights
}

interface GetMyRightsCriticalFailAction {
    type: RightsActionTypes.GET_MY_RIGHTS_CRITICAL_FAIL;
}
export type RightsAction = TryGetMyRightsCriticalAction | GetMyRightsCriticalSuccessAction | GetMyRightsCriticalFailAction

export interface CriticalRight {
    uuid: string,
    id: number,
    rights: number,
    users: number[],
    type: number
}

export interface Right {
    id: number,
    obj_id: number,
    agree_list: number[]
}

export interface ListOfObjectsRights {
    department: Right[],
    group: Right[],
    user: Right[]
}
//PIZDEC NEED REFACTORING BACKEND
export interface bitAndListOfObjectsRights {
    1: ListOfObjectsRights,
    2: ListOfObjectsRights,
    4: ListOfObjectsRights,
    8: ListOfObjectsRights,
    16: ListOfObjectsRights,
    32: ListOfObjectsRights,
    64: ListOfObjectsRights,
    128: ListOfObjectsRights,
    256: ListOfObjectsRights,
    512: ListOfObjectsRights,
    1024: ListOfObjectsRights,
    2048: ListOfObjectsRights,
    4096: ListOfObjectsRights,
    8192: ListOfObjectsRights,
    16384: ListOfObjectsRights,
    32768: ListOfObjectsRights,
    65536: ListOfObjectsRights,
    131072: ListOfObjectsRights,
    262144: ListOfObjectsRights,
    524288: ListOfObjectsRights,
    1048576: ListOfObjectsRights,
    2097152: ListOfObjectsRights,
    4194304: ListOfObjectsRights,
    8388608: ListOfObjectsRights,
    16777216: ListOfObjectsRights,
    33554432: ListOfObjectsRights,
    67108864: ListOfObjectsRights,
    134217728: ListOfObjectsRights,
    268435456: ListOfObjectsRights,
    536870912: ListOfObjectsRights,
    1073741824: ListOfObjectsRights,
    2147483648: ListOfObjectsRights,
    4294967296: ListOfObjectsRights,
    8589934592: ListOfObjectsRights,
    17179869184: ListOfObjectsRights,
    34359738368: ListOfObjectsRights,
    68719476736: ListOfObjectsRights,
    137438953472: ListOfObjectsRights,
    274877906944: ListOfObjectsRights,
    549755813888: ListOfObjectsRights,
    1099511627776: ListOfObjectsRights,
    2199023255552: ListOfObjectsRights,
    4398046511104: ListOfObjectsRights,
    8796093022208: ListOfObjectsRights,
    17592186044416: ListOfObjectsRights,
    35184372088832: ListOfObjectsRights,
    70368744177664: ListOfObjectsRights,
    140737488355328: ListOfObjectsRights,
    281474976710656: ListOfObjectsRights,
    562949953421312: ListOfObjectsRights,
    1125899906842624: ListOfObjectsRights,
    2251799813685248: ListOfObjectsRights,
    4503599627370496: ListOfObjectsRights,
    9007199254740992: ListOfObjectsRights,
    18014398509481984: ListOfObjectsRights,
    36028797018963968: ListOfObjectsRights,
    72057594037927936: ListOfObjectsRights,
    144115188075855872: ListOfObjectsRights,
    288230376151711744: ListOfObjectsRights,
    576460752303423488: ListOfObjectsRights,
    1152921504606846976: ListOfObjectsRights,
    2305843009213693952: ListOfObjectsRights,
    4611686018427387904: ListOfObjectsRights,
}

export interface userAndHisRights {
    user_id: number,
    rights: bitAndListOfObjectsRights
}

export interface AuthActionTypes{
    TRY_AUTH_SUCCESS:'TRY_AUTH_SUCCESS'
}
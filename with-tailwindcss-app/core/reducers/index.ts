import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {licenseReducer} from "./licenseReducer";
import {AuthReducer} from "./authReducer"
import {RegReducer} from "./regReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    licenses: licenseReducer,
    auth: AuthReducer,
    reg:RegReducer
})

export type RootState = ReturnType<typeof rootReducer>
import {combineReducers} from "redux";
import {AuthReducer} from "./authReducer"
import {RegReducer} from "./regReducer";


export const rootReducer = combineReducers({
    auth: AuthReducer,
    reg:RegReducer
})

export type RootState = ReturnType<typeof rootReducer>
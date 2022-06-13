import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../core/reducers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
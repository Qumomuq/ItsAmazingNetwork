import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../core/actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
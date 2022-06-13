import * as UserActionCreators from './user'
import * as LicensesActionCreators from './licenses'
import * as TokenActionCreators from './auth'
import * as RegActionCreators from './regi'

export default {
    ...TokenActionCreators,
    ...UserActionCreators,
    ...LicensesActionCreators,
    ...RegActionCreators
}
import {isDebug} from "../config";

export const wrapUrl = (url) => {
    if (isDebug) {
        return url + '?XDEBUG_SESSION=XDEBUG_ECLIPSE'
    }
    return url
}
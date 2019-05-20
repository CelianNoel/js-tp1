/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import * as store from "../store"

const get = (index) => {
    return store.getState()[index]
};

export default get;

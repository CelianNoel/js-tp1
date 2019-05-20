/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import * as store from "../store"

const list = () => {
    return store.getState()
};

export default list;

/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
import * as store from "../store"

const add = (elm) => {
    let list = store.getState();
    if (Array.isArray(elm)) {
        Array.prototype.push.apply(list, elm);
    }
    else
        list.push(elm);
    store.setState(list)
};

export default add;

/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import * as store from "../store"

const remove = (index) => {
    let list = store.getState();
    list.splice(index,1);
    store.setState(list);
};

export default remove;

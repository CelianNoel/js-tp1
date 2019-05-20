/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/
import * as store from "../store"

const update = (index) => {
    let url = window.prompt();
    let list = store.getState();
    list.splice(index, 1, url);
    store.setState(list);
};

export default update;

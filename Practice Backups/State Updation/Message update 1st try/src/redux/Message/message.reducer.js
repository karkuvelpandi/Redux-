import { GM, GN } from "./message.action"
let intialState = {
    wish: "hello"
}
let messageReducer = (state= intialState, action) => {
    switch (action.type) {
        case GM:
            return {wish:"Good Morning"}
        case GN:
            return {wish:"Good Night Have A dinner and good sleep and all"}
        default:
            return state;
       }

};
export {messageReducer}
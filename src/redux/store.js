//import { createStore } from "redux";
//import { devToolsEnhancer } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer,contactsReducer, filterReducer } from "./reducers";


// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
// const initialState={
//     contacts: [],
//     //filter: "",
// }



//const enhancer = devToolsEnhancer();// Створюємо розширення стора, щоб додати інструменти розробника
/**Якщо вам не потрібний початковий стан preloadedState, то значення enhancer передається другим аргументом. В іншому випадку - третім.
 */

//export const store = createStore(rootReducer,enhancer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

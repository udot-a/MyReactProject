import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    init: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()))
window.store = store;
export default store;
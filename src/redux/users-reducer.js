import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


 let initialState = {
     users:[],
     pageSize:5,
     totalUsersCount:0,
     currentPage:1,
     isFetching:false
 }
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:{
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage:action.currentPage
            }
        }
        case SET_TOTAL_COUNT:{
            return {
                ...state,
                totalUsersCount:action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching:action.isFetching
            }
        }
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map((u)=>{
                    if (u.id === action.userId) {
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map((u)=>{
                    if (u.id === action.userId) {
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        default:
            return state;
    }
    return state;
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})




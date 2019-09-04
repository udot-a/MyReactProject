import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


 let initialState = {
     users:[],
     pageSize:5,
     totalUsersCount:0,
     currentPage:3
 }
//     users: [
//         {
//             id: 1,
//             photoUrl:'http://stuki-druki.com/biofoto/Dmitriy-Egorov-3-01.jpg',
//             followed: true,
//             fullName: 'Andrew',
//             status: 'I am a BOSS!!!',
//             location: {
//                 city: 'Kharkiv',
//                 country: 'Ukraine'
//             }
//         },
//         {
//             id: 2,
//             photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/267px-Dmitry_Nagiev_2017_4.jpg',
//             followed: true,
//             fullName: 'Andrew',
//             status: 'I am a BOSS!!!',
//             location: {
//                 city: 'Kharkiv',
//                 country: 'Ukraine'
//             }
//         },
//         {
//             id: 3,
//             photoUrl:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/22/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B0%D1%80%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2_%28%D0%B0%D0%BA%D1%82%D1%91%D1%80%29.jpg/260px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B0%D1%80%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2_%28%D0%B0%D0%BA%D1%82%D1%91%D1%80%29.jpg',
//             followed: false,
//             fullName: 'Petr',
//             status: 'I am too...',
//             location: {
//                 city: 'Moscow',
//                 country: 'RAssia'
//             }
//         },
//         {
//             id: 4,
//             photoUrl:'http://stuki-druki.com/biofoto/Dmitriy-Muhin-01.jpg',
//             followed: true,
//             fullName: 'Diana',
//             status: 'I am beautiful',
//             location: {
//                 city: 'San-Francisco',
//                 country: 'United State'
//             }
//         }
//     ]
// };


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
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})




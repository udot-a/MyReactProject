import React from 'react'
import styles from "./users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
const {
    followingInProgress,
    unfollow,
    follow,
    currentPage,
    onPageChanged,
    totalUsersCount,
    pageSize
} = props;
    return (
        <div>
            <Paginator
                currentPage = {currentPage}
                onPageChanged = {onPageChanged}
                totalUsersCount = {totalUsersCount}
                pageSize = {pageSize}
            />
            {
                props.users.map((u, key) => {
                    return (
                        <User
                            key={key}
                            user={u}
                            followingInProgress={followingInProgress}
                            unfollow={unfollow}
                            follow={follow}
                        />
                    )
                })
            }
        </div>
    )
}
export default Users
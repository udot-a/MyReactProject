import React from 'react'
import styles from "./users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={`${props.currentPage === p && styles.selectedPage} ${styles.pageCounter}`}

                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={styles.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : userPhoto} alt="Аватарка"/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "590b0d75-b3dd-4f9a-b856-8c6f3fa09948"
                                                }
                                            })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "590b0d75-b3dd-4f9a-b856-8c6f3fa09948"
                                                }
                                            })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                    
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {'u.location.city'}
                            </div>
                            <div>
                                {'u.location.country'}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users
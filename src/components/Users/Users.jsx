import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/1551511784_10.jpg'


let Users = (props) => {
    if (props.user.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items));
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photos.small !=null ? u.photos.small: userPhoto} alt="Аватарка"/>
                        
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
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
export default Users;
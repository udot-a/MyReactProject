import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'http://stuki-druki.com/biofoto/Dmitriy-Egorov-3-01.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a BOSS!!!',
                location: {
                    city: 'Kharkiv',
                    country: 'Ukraine'
                }
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/267px-Dmitry_Nagiev_2017_4.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a BOSS!!!',
                location: {
                    city: 'Kharkiv',
                    country: 'Ukraine'
                }
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/22/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B0%D1%80%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2_%28%D0%B0%D0%BA%D1%82%D1%91%D1%80%29.jpg/260px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B0%D1%80%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2_%28%D0%B0%D0%BA%D1%82%D1%91%D1%80%29.jpg',
                followed: false,
                fullName: 'Petr',
                status: 'I am too...',
                location: {
                    city: 'Moscow',
                    country: 'RAssia'
                }
            },
            {
                id: 4,
                photoUrl: 'http://stuki-druki.com/biofoto/Dmitriy-Muhin-01.jpg',
                followed: true,
                fullName: 'Diana',
                status: 'I am beautiful',
                location: {
                    city: 'San-Francisco',
                    country: 'United State'
                }
            }
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photoUrl} alt="Аватарка"/>
                        
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
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;
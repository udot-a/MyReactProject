import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items);
                                this.props.setTotalUsersCount(response.data.totalCount)});
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));

    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = []
        for(let i=1; i<=pagesCount; i++){
            pages.push(i)
        }
        return (<div>
            <div>
                {pages.map(p=> {
                   return  <span className={`${this.props.currentPage === p && styles.selectedPage} ${styles.pageCounter}`}

                   onClick={()=>this.onPageChanged(p)}>{p}</span>
                })}
                {/*<span>1</span>*/}
                {/*<span className={styles.selectedPage}>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
                {/*<span>5</span>*/}
            </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : userPhoto} alt="Аватарка"/>

                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users;
import React from 'react'
import styles from "./Paginator.module.css";

let Paginators = (props) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged
    } = props;
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };

    return (
            <div>
                {pages.map((p, key) => {
                    return <span key={key} className={`${styles.pageCounter} ${currentPage === p && styles.selectedPage}`}

                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}
            </div>
    )
};
export default Paginators;
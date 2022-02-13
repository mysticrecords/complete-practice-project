import React from 'react';

import styles from './UserItem.module.css';


const UserItem = props => {
    return (
        <div className={`${styles['user-item']}`}>

            {props.children}

        </div>
    );
}

export default UserItem;
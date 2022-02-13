import React from 'react';

import UserItem from '../UserItem/UserItem';

import styles from './UserList.module.css';

const UserList = props => {

    return (
        <div className={`${styles['user-list']}`}>
            {props.items.map(user => (
                <UserItem key={user.id}>
                    {user.name + " (" + user.age + " years old)"}
                </UserItem>
            ))}

        </div>
    );
}

export default UserList;
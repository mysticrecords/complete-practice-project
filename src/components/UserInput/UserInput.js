import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import styles from './UserInput.module.css';

const UserInput = props => {
    return (
        <form onSubmit={console.log("form submitted")}>
            <div className={`${styles['form-control']}`}>
                <label>Username</label>
                <input type="text" onChange={console.log("update username input")}></input>
                <label>Age (Years) </label>
                <input type="number" onChange={console.log("update age input")}></input>
            </div>

            <Button type="submit">
                Add User
            </Button>
        </form>
    );
};

export default UserInput;
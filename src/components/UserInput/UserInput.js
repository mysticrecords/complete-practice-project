import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import styles from './UserInput.module.css';

const UserInput = props => {

    const [enteredNameValue, setEnteredNameValue] = useState('');
    const [enteredAgeValue, setEnteredAgeValue] = useState(0);

    const nameInputChangeHandler = event => {
        setEnteredNameValue(event.target.value);
    };

    const ageInputChangeHandler = event => {
        setEnteredAgeValue(event.target.value);
    };

    const onFormSubmitHandler = event => {
        event.preventDefault();
        event.target.reset();
        props.onAddUser(enteredNameValue, enteredAgeValue);
    };

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className={`${styles['form-control']}`}>
                <label>Username</label>
                <input type="text" onChange={nameInputChangeHandler}></input>
                <label>Age (Years) </label>
                <input type="number" onChange={ageInputChangeHandler}></input>
            </div>

            <Button type="submit">
                Add User
            </Button>
        </form >
    );
};

export default UserInput;
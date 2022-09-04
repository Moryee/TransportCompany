import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Input } from '../components/controls';
import { useForm, Form } from '../components/useForm';
import { Link } from 'react-router-dom';
import { getData } from '../service/service';
import './Pages.css';

import { register, login, logout } from '../service/AuthService';

const accessRightItems = [
    { id: 'user', title: 'User' },
    { id: 'operator', title: 'Operator' },
    { id: 'administrator', title: 'Administrator' },
    { id: 'owner', title: 'Owner' },
]

export const initialValues = {
    id: 0,
    username: '',
    password: '',
    access_right: 'user',
}

export default function Auth(props) {
    const { authType, setAccessRight, setUsername } = props
    const [keys, setKeys] = useState([])

    useEffect(() => {
        getData(setKeys, 'users')
    }, [])

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        let loginArray = keys.map((row) => { return row.username })

        if ('username' in fieldValues) {
            if (!fieldValues.username)
                temp.username = 'This field is required.'
            // else if ((/\d+/).test(fieldValues.floors_number))
            //     temp.floors_number = 'Floors number must be digital'
            if (loginArray.includes(fieldValues.username && authType == 'register')) {
                temp.username = 'This username is already taken'
            }
            else
                temp.username = ''
        }
        // temp.fullName = fieldValues.fullName ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()

        if (!validate()) {
            console.log('invalid data');
            return
        }
        // if users dict is not initialized exit
        if (keys.length == 0) { return }

        console.log(authType);
        if (authType == 'login') {
            keys.map((row) => {
                if (row.username == values.username) {
                    if (row.password == values.password) {
                        login(row, setAccessRight, setUsername)
                        return
                    }
                    else {
                        console.log('incorrect password')
                        return
                    }
                }
            })
        }
        else if (authType == 'register') {
            register(values, setAccessRight, setUsername)
        }
        else {
            console.log(`cannot recognize \'${authType}\' in AuthPage`);
        }
        // addOrEdit(values, resetForm) // use another func
        resetForm();
    }

    function titleForm(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (authType == 'logout') {
        logout(setAccessRight, setUsername)
        return (
            <h1>Logged Out</h1>
        )
    }
    return (
        <div className='body'>
        <Form onSubmit={handleSubmit} className="auth-page">
            <h1>{titleForm(authType)}</h1>
            <Grid container
                direction={'column'}
                rowGap={2}
                sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>

                <Input
                    name="username"
                    label="Username"
                    value={values.username}
                    onChange={handleInputChange}
                    error={errors.username}
                />
                <Input
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                />

                <Grid container direction={'row'} columnGap={2} justifyContent='center'>
                    <Button
                        type="submit"
                        text="Submit" />
                    <Button
                        text="Reset"
                        color="warning"
                        onClick={resetForm} />
                </Grid>

                <Link to='/register' className='register-btn'>
                    REGISTER
                </Link>

            </Grid>
        </Form>
        </div>
    )
}
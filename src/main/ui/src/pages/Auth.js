import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Input } from '../components/controls';
import { useForm, Form } from '../components/useForm';

import { getData } from '../service/service';

import { register, login } from '../service/AuthService';

const accessRightItems = [
    { id: 'user', title: 'User' },
    { id: 'operator', title: 'Operator' },
    { id: 'administrator', title: 'Administrator' },
    { id: 'owner', title: 'Owner' },
]

// створити користувача із правами власника БД.
// створити користувача із правами адміністратора БД.
// створити користувача із правами оператора БД.
// створити користувача із правами на перегляд даних таблиць.


export const initialValues = {
    id: 0,
    login: '',
    password: '',
    access_right: 'user',
}

export default function Auth(props) {
    const { authType, setAccessRight } = props
    const { keys, setKeys} = useState()


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        getData(setKeys, 'key')
        let loginArray = keys.map((row) => { return row.login })

        if ('login' in fieldValues) {
            if (!fieldValues.login)
                temp.login = 'This field is required.'
            // else if ((/\d+/).test(fieldValues.floors_number))
            //     temp.floors_number = 'Floors number must be digital'
            if (loginArray.includes(fieldValues.login)){
              temp.login = 'This login is already taken'
            }
            else
                temp.floors_number = ''
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
        if (validate()) {
            if (authType == 'login') {
              keys.map((row) => {
                if (row.login == values.login) {
                  if (row.password == values.password) {
                    login(row, setAccessRight)
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
              register(values, keys, setKeys, setAccessRight)
            }
            else {
              console.log(`cannot recognize \'${authType}\' in AuthPage`);
            }
            // addOrEdit(values, resetForm) // use another func
            resetForm();
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container
                direction={'column'}
                rowGap={2}
                sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>

                <Input
                    name="login"
                    label="Login"
                    value={values.login}
                    onChange={handleInputChange}
                    error={errors.login}
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
            </Grid>
        </Form>
    )
}
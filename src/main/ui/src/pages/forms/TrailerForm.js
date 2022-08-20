import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Checkbox, Input, RadioGroup, Select } from '../../components/controls';
import { useForm, Form } from '../../components/useForm';


export const initialValues = {
    id: 0,
    truck: '',
    cargo: '',
    location: '',
}

export default function TruckForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('floors_number' in fieldValues) {
            if (!fieldValues.floors_number)
                temp.floors_number = 'This field is required.'
            else
                temp.floors_number = ''
        }
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
            addOrEdit(values, resetForm)
            resetForm();
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container
                direction={'column'}
                rowGap={2}
                sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>

                <Input
                    name="truck"
                    label="Truck"
                    value={values.truck}
                    onChange={handleInputChange}
                    error={errors.truck}
                />
                <Input
                    name="cargo"
                    label="Cargo"
                    value={values.cargo}
                    onChange={handleInputChange}
                    error={errors.cargo}
                />
                <Input
                    name="location"
                    label="Location"
                    value={values.location}
                    onChange={handleInputChange}
                    error={errors.location}
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
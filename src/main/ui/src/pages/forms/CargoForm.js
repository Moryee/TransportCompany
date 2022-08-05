import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Checkbox, Input, RadioGroup, Select } from '../../components/controls';
import { useForm, Form } from '../../components/useForm';

export const initialValues = {
    id: 0,
    type: '',
    weight: '',
    location: '',
    destination: '',
}

export default function CargoForm(props) {
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
                    name="type"
                    label="Type"
                    value={values.type}
                    onChange={handleInputChange}
                    error={errors.type}
                />
                <Input
                    name="weight"
                    label="Weight"
                    value={values.weight}
                    onChange={handleInputChange}
                    error={errors.weight}
                />
                <Input
                    name="location"
                    label="Location"
                    value={values.location}
                    onChange={handleInputChange}
                    error={errors.location}
                />
                <Input
                    name="destination"
                    label="Destination"
                    value={values.destination}
                    onChange={handleInputChange}
                    error={errors.destination}
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
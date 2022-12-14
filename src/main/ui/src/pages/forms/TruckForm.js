import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Checkbox, Input, RadioGroup, Select } from '../../components/controls';
import { useForm, Form } from '../../components/useForm';

import { getData } from '../../service/service';

export const initialValues = {
    id: 0,
    model: '',
    driver: '',
    location: '',
}

export default function TruckForm(props) {
    const { addOrEdit, recordForEdit } = props
    const [trucks, setTrucks] = useState([])
    const [drivers, setDrivers] = useState([])
    const [availableDrivers, setAvailableDrivers] = useState([])

    useEffect(() => {
        getData(setTrucks, 'trucks')
        getData(setDrivers, 'drivers')
    }, [])

    useEffect(() => {
        let result = []
        drivers.forEach(driver => {
            if (!trucks.some(t => t.driver == driver.id)) {
                const newDict = {
                    id: driver.id,
                    title: `${driver.name} ${driver.surname}`,
                }
                result.push(newDict)
            }
        });
        setAvailableDrivers(result)
    }, [drivers, trucks])

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('model' in fieldValues) {
            if (!fieldValues.model)
                temp.model = 'This field is required'
            else
                temp.model = ''
        }

        if ('location' in fieldValues) {
            if (!fieldValues.location)
                temp.location = 'This field is required'
            else
                temp.location = ''
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
                    name="model"
                    label="Model"
                    value={values.model}
                    onChange={handleInputChange}
                    error={errors.model}
                />
                <Select
                    name="driver"
                    label="Driver"
                    value={values.driver}
                    onChange={handleInputChange}
                    options={availableDrivers}
                    error={errors.driver}
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
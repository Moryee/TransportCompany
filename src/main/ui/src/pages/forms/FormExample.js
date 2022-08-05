import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Checkbox, Input, RadioGroup, Select } from '../../components/controls';
import { useForm, Form } from '../../components/useForm';
import { makeStyles } from '@mui/styles';

import { FormService, GetIValues } from './FormService';

// const useStyles = makeStyles({
//     root: {
//         minWidth: '100',
//     },
// });

const materialItems = [
    { id: 'bricks', title: 'Bricks' },
    { id: 'cement', title: 'Cement' },
    { id: 'concrete', title: 'Concrete' },
    { id: 'plywood', title: 'Plywood' },
    { id: 'wood', title: 'Wood' },
]

const typeItems = [
    { id: 'residential', title: 'Residential' },
    { id: 'school', title: 'School' },
    { id: 'hospital', title: 'Hospital' },
]

export const initialValues = {
    id: 0,
    construction_material: '',
    type: '',
    floors_number: '',
}

export default function BuildingForm(props) {
    const { addOrEdit, recordForEdit } = props
    // const classes = useStyles();

    // const initialValues = GetIValues(tableName)

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('floors_number' in fieldValues) {
            if (!fieldValues.floors_number)
                temp.floors_number = 'This field is required.'
            // else if ((/\d+/).test(fieldValues.floors_number))
            //     temp.floors_number = 'Floors number must be digital'
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
            // employeeService.insertEmployee(values)
            // console.log(values);
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

                <Select
                    name="construction_material"
                    label="Construction Material"
                    value={values.construction_material}
                    onChange={handleInputChange}
                    options={materialItems}
                    error={errors.construction_material}
                />
                <Select
                    name="type"
                    label="Building Type"
                    value={values.type}
                    onChange={handleInputChange}
                    options={typeItems}
                    error={errors.type}
                />
                <Input
                    name="floors_number"
                    label="Floors Number"
                    value={values.floors_number}
                    onChange={handleInputChange}
                    error={errors.floors_number}
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
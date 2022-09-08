import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Checkbox, Input, RadioGroup, Select } from '../../components/controls';
import { useForm, Form } from '../../components/useForm';

import { getData } from '../../service/service';

export const initialValues = {
    id: 0,
    truck: '',
    cargo: '',
    location: '',
}

export default function TruckForm(props) {
    const { addOrEdit, recordForEdit } = props
    const [trucks, setTrucks] = useState([])
    const [trailers, setTrailers] = useState([])
    const [cargo, setCargo] = useState([])
    const [availableTrucks, setAvailableTrucks] = useState([])
    const [availableCargo, setAvailableCargo] = useState([])

    useEffect(() => {
        getData(setTrucks, 'trucks')
        getData(setTrailers, 'trailers')
        getData(setCargo, 'cargo')
    }, [])

    // select items for trucks
    useEffect(() => {
        let result = []
        trucks.forEach(truck => {
            if(!trailers.some(trailer => trailer.truck == truck.id)) {
                const newDict = {
                    id: truck.id,
                    title: `${truck.model}`,
                }
                result.push(newDict)
            }
        });
        setAvailableTrucks(result)
    }, [trailers, trucks])

    // select items for cargo
    useEffect(() => {
        let result = []
        cargo.forEach(crg => {
            if(!trailers.some(trailer => trailer.cargo == crg.id)) {
                const newDict = {
                    id: crg.id,
                    title: `${crg.type}`,
                }
                result.push(newDict)
            }
        });
        setAvailableCargo(result)
    }, [cargo])

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
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
            console.log(recordForEdit)
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
                    name="truck"
                    label="Truck"
                    value={values.truck}
                    onChange={handleInputChange}
                    options={availableTrucks}
                    error={errors.truck}
                />
                <Select
                    name="cargo"
                    label="Cargo"
                    value={values.cargo}
                    onChange={handleInputChange}
                    options={availableCargo}
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
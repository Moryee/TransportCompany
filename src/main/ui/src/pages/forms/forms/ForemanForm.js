import React from 'react'
import { Grid, } from '@mui/material';
import { Input, Select } from '../../../components/controls';
import { useForm, Form } from '../../../components/useForm';


export const initialBuildingsValues = {
    id: 0,
    name: '',
    surname: '',
    working_on: '0',
}

export function BuildingForm(props) {
    const { values, errors, handleInputChange } = props
    return (
        <Grid container
        direction={'column'}
        rowGap={2}>
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
        </Grid>
    )
}
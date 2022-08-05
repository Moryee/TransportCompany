import React from 'react'
import { Grid, } from '@mui/material';
import { Input, Select } from '../../../components/controls';
import { useForm, Form } from '../../../components/useForm';

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

export const initialBuildingsValues = {
    id: 0,
    construction_material: '',
    type: '',
    floors_number: '',
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
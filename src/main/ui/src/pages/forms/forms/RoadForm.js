import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';
import { Button, Checkbox, Input, RadioGroup, Select } from '../../../components/controls';
import { useForm, Form } from '../../../components/useForm';

const surfaceItems = [
    { id: 'dirt', title: 'Dirt' },
    { id: 'asphalt', title: 'Asphalt' },
]

const typeItems = [
    { id: 'road', title: 'Road' },
    { id: 'bridge', title: 'Bridge' },
]

export const initialRoadValues = {
    id: 0,
    road_surface: '',
    type: '',
    lanes_number: '',
}

export function RoadForm(props) {
    const { values, errors, handleInputChange } = props
    return (
        <Grid container
        direction={'column'}
        rowGap={2}>
            <Select
                name="road_surface"
                label="Road Surface"
                value={values.road_surface}
                onChange={handleInputChange}
                options={surfaceItems}
                error={errors.road_surface}
            />
            <Select
                name="type"
                label="Road Type"
                value={values.type}
                onChange={handleInputChange}
                options={typeItems}
                error={errors.type}
            />
            <Input
                name="lanes_number"
                label="Lanes Number"
                value={values.lanes_number}
                onChange={handleInputChange}
                error={errors.lanes_number}
            />
        </Grid>
    )
}
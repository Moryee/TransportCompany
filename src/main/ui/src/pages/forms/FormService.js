import React from 'react'

import CargoForm from './CargoForm'
import TruckForm from './TruckForm'
import DriverForm from './DriverForm'
import TrailerForm from './TrailerForm'
import UserForm from './UserForm'

export default function FormService(props) {
    const { addOrEdit, recordForEdit, tableName } = props
    switch (tableName) {
        case 'cargo':
            return (
                <CargoForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            )
        case 'trucks':
            return (
                <TruckForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            )
        case 'drivers':
            return (
                <DriverForm addOrEdit={addOrEdit} recordForEdit={recordForEdit}/>
            )
        case 'trailers':
            return (
                <TrailerForm addOrEdit={addOrEdit} recordForEdit={recordForEdit}/>
            )
        case 'users':
            return (
                <UserForm addOrEdit={addOrEdit} recordForEdit={recordForEdit}/>
            )
        default:
            console.log(`\'${tableName}\' not found in FormService`)
    }
}
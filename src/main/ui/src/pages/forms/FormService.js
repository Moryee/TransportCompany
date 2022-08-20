import React from 'react'

import CargoForm from './CargoForm'
import TruckForm from './TruckForm'
import DriverForm from './DriverForm'
import TrailerForm from './TrailerForm'

export default function FormService(props) {
    function Error(tableName) {
        console.log(`\'${tableName}\' not found in FormService`)
    }

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
        default:
            Error(tableName)
    }
}
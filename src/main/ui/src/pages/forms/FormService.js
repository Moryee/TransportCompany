import React, { useState, useEffect } from 'react'

import CargoForm from './CargoForm'
import TruckForm from './TruckForm'

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
        default:
            Error(tableName)
    }
}
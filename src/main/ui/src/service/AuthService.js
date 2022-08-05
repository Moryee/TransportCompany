import React, { useState, useEffect } from 'react'
import { insertData } from './service'

export const accessItems = [
    { id: 'none', value: 0 },
    { id: 'user', value: 1 },
    { id: 'operator', value: 2 },
    { id: 'admin', value: 3 },
    { id: 'owner', value: 4 },
]

export function restrict(accessRight, required) {
    var userRightValue = 0
    var requiredValue = 0

    accessItems.forEach(item => {
        if (item.id == accessRight) {
            userRightValue = item.value
        }
        if (item.id == required) {
            requiredValue = item.value
        }
    });

    if (userRightValue >= requiredValue) {
        return true
    }

    return false
}

export function AuthData() {
    // const [isAuthorised, setIsAuthorised] = useState(false)
    // const [accessRight, setAccessRight] = useState('user')
    // return (accessRight, setAccessRight)
}

export function login(row, setAccessRight) {
    // const { isAuthorised, setIsAuthorised, accessRight, setAccessRight } = AuthData()

    setAccessRight(row.access_right)
}

export function logout(setAccessRight) {
    // const { isAuthorised, setIsAuthorised, accessRight, setAccessRight } = AuthData()

    setAccessRight('none')
}

export function register(row, data, setData, setAccessRight) {
    // const { isAuthorised, setIsAuthorised, accessRight, setAccessRight } = AuthData()
    setAccessRight(row.access_right)
    insertData(row, data, 'key', setData)
}
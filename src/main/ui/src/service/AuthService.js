import React from 'react'
import { getLink } from './service'

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

export function isAuthorised(accessRight) {
    if (accessRight != 'none') { return true }
    return false
}

export function login(row, setAccessRight, setUsername) {
    setAccessRight(row.access_right)
    setUsername(row.username)
    console.log(`logged in with ${row.username}, ${row.access_right}`);
}

export function logout(setAccessRight, setUsername) {
    setAccessRight('none')
    setUsername('')
    console.log(`logged out, access right is unauthorized`);
}

export function register(row, setAccessRight, setUsername) {
    setAccessRight(row.access_right)
    setUsername(row.username)
    fetch(getLink('users', 'post'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row)
    })
}
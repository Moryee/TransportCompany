const link = 'http://localhost:65432/api/'

export function getLink(tableName, operation) {
    //example: 'http://localhost:8080/api/building/update'
    switch (operation) {
        case 'get':
            return `${link}${tableName}`
        case 'post':
            console.log('posting');
            return `${link}${tableName}`
        case 'put':
            console.log('updating');
            return `${link}${tableName}/put`
        case 'delete':
            console.log('deleting')
            return `${link}${tableName}/delete`
        default:
            console.log(`operation \'${operation}}\' not found in service.js`)
    }
}

export function getData(setData, tableName) {
    fetch(getLink(tableName, 'get'))
        .then(res => res.json())
        .then((result) => {
            setData(result)
        })
}

export function insertData(row, data, tableName, setData) {
    // row.id = generateId(data)

    // if (row.id == false) {
    //     return
    // }

    row.id = null

    fetch(getLink(tableName, 'post'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row)
    }).then(() => {getData(setData, tableName)})
}

export function updateData(row, tableName, setData) {
    fetch(getLink(tableName, 'put'), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row)
    }).then(() => {getData(setData, tableName)})
}

export function deleteData(row, tableName, setData) {
    fetch(getLink(tableName, 'delete'), {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row)
    }).then(() => {getData(setData, tableName)})
}

export function generateId(data) {
    let count = 0
    var generated_id = 0
    let id_array = data.map((row) => { return row.id })
    while (count < 12) {
        generated_id = Math.floor(Math.random() * 10000)
        if (!id_array.includes(generated_id) && generateId != 0) {
            return generated_id
        }
        if (count > 10) {
            console.log('error creating index in servise.js')
            break
        }
        count++;
    }
    return false
}

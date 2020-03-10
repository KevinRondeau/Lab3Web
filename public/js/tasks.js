/* ------------------------------ eventListener ----------------------------- */
//const taskForm = document.querySelector('#taskForm')
const newName = document.querySelector('#Name')
const newDesc = document.querySelector('#Description')
const Table = document.querySelector('table')
const addBtn = document.querySelector('#addButton')
const delBtn = document.getElementsByClassName('deleteButton')

/* --------------------------------- addTask -------------------------------- */
//#region 
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    axios.
        post('/tasks/' + newName.value + '/' + newDesc.value)
        .then(res => {
            Table.insertAdjacentHTML("afterbegin", res.data)
            newName.value = ''
            newDesc.value = ''
            return console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

})
//#endregion

/* ------------------------------- deleteTask ------------------------------- */
//#region 
//FIXME 
// delBtn[i].addEventListener('click', (e) => {
//     e.preventDefault()
//     axios.delete('/tasks/' + i)
//         .then(res => {
//             Table.deleteRow(res.data.index)
//             return console.log(res.data)
//         }).catch(err => {
//             console.log(err)
//         })

// })


 //#endregion
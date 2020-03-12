/* ------------------------------ eventListener ----------------------------- */
//const taskForm = document.querySelector('#taskForm')
const newName = document.querySelector('#Name')
const newDesc = document.querySelector('#Description')
const Table = document.querySelector('table')
const addBtn = document.querySelector('#addButton')

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
function removeRow(index, thisRow) {
    // function SomeDeleteRowFunction(o) {
    //     //no clue what to put here?
    //     var p=o.parentNode.parentNode;
    //         p.parentNode.removeChild(p);
    //    }
    axios.
        delete('/tasks/' + index)
        .then(res => {
            let delRow = thisRow.parentNode.parentNode
            delRow.parentNode.removeChild(delRow);
            //Table.deleteRow(delRow)
            return console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

}

 //#endregion
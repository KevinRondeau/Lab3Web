/* ------------------------------ eventListener ----------------------------- */
window.addEventListener('DOMContentLoaded', e => {
    const taskForm = document.querySelector('#taskForm')
    const newName = document.querySelector('#Name')
    const newDesc = document.querySelector('#Description')
    const Table = document.querySelector('table')

    taskForm.addEventListener('submit', (e) => {
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
})

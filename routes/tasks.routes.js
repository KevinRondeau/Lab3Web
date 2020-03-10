/* --------------------------------- Modules -------------------------------- */
//#region 
const router = require('express').Router()
const taskHandler = require('../data/tasks.js')
//#endregion

/* --------------------------------- Globals -------------------------------- */
//#region 
let tasks = taskHandler.loadTasks()
let index = tasks.length + 1
//#endregion

/* --------------------------------- Routes --------------------------------- */
//#region 
router.get('/', (req, res) => {
    res.render('tasks', { tasks })
})

/* ------------------------------ addTaskRoute ------------------------------ */
//#region 
router.post('/:title/:description', (req, res) => {
    const newTask = { index: index, title: req.params.title, description: req.params.description }
    try {
        res.render('includes/task', { task: newTask })
        taskHandler.addTask(index, newTask.title, newTask.description)
        index++
        tasks = taskHandler.loadTasks()
    } catch (e) {
        console.log(e)
    }
})
//#endregion

/* ----------------------------- deleteTaskRoute ---------------------------- */
//#region 
router.delete('/:index', (req, res) => {
    try {
        taskHandler.removeTask(index)
        res.status(400).send()
        task = taskHandler.loadTasks()
    } catch (e) {
        console.log(e)
    }

})
//#endregion

//#endregion

module.exports = router
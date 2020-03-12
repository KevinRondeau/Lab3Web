/* --------------------------------- Modules -------------------------------- */
//#region 
const router = require('express').Router()
const taskHandler = require('../data/tasks.js')
//#endregion

/* --------------------------------- Globals -------------------------------- */
//#region 
let tasks = taskHandler.loadTasks()
let index = tasks[0].index + 1
//#endregion

/* --------------------------------- Routes --------------------------------- */
//#region 
router.get('/', (req, res) => {
    res.render('tasks', { tasks })
})

/* ------------------------------ addTaskRoute ------------------------------ */
//#region 
router.post('/:title/:description', (req, res) => {

    const newTask = { index: tasks[0].index + 1, title: req.params.title, description: req.params.description }
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

router.delete('/:ind', (req, res) => {
    // console.log(req.params.ind)
    try {

        taskHandler.removeTask(req.params.ind)
        res.status(200).send(req.params)
        tasks = taskHandler.loadTasks()
        index = tasks[0].index + 1
    } catch (e) {
        console.log(e)
    }

})
//#endregion

//#endregion

module.exports = router
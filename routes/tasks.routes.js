/* --------------------------------- Modules -------------------------------- */
//#region 
const router = require('express').Router()
const taskHandler = require('../data/tasks.js')
//#endregion

/* --------------------------------- Globals -------------------------------- */
//#region 
let tasks = taskHandler.loadTasks()
if (tasks.length > 0) {
    let index = tasks[0].index + 1
} else {
    index = 0
}
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
        tasks = taskHandler.loadTasks()
        if (tasks.length > 0) {
            index = tasks[0].index + 1
        } else {
            index = 0
        }
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
        if (tasks.length > 0) {
            index = tasks[0].index + 1
        } else {
            index = 0
        }
    } catch (e) {
        console.log(e)
    }

})
//#endregion

//#endregion

module.exports = router
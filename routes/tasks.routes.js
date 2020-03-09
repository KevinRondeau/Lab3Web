/* --------------------------------- Modules -------------------------------- */
const router = require('express').Router()
const taskHandler = require('../data/tasks.js')
//#endregion

const tasks = taskHandler.loadTasks()
let index = tasks.length + 1
/* --------------------------------- Routes --------------------------------- */
router.get('/', (req, res) => {
    res.render('tasks', { tasks })
})

router.post('/:title/:description', (req, res) => {
    const newTask = { index: index, title: req.params.title, description: req.params.description }
    try {
        taskHandler.addTask(index, newTask.title, newTask.description)
        index++
        res.render('includes/task', { task: newTask })
    } catch (e) {
        console.log(e)
    }
})

module.exports = router
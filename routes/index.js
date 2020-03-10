/* --------------------------------- Modules -------------------------------- */
const router = require('express').Router()
const taskRoute = require('./tasks.routes')

/* --------------------------------- Routes --------------------------------- */
router.use('/tasks', taskRoute)

/* ---------------------------------- Index --------------------------------- */
router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router
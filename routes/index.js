/* --------------------------------- Modules -------------------------------- */
//#region 
const router = require('express').Router()
const taskRoute = require('./tasks.routes')
//#endregion

/* --------------------------------- Routes --------------------------------- */
router.use('/tasks', taskRoute)

/* ---------------------------------- Index --------------------------------- */
router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router
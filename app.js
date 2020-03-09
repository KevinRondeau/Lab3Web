/* --------------------------------- Modules -------------------------------- */
//#region 
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const routes = require('./routes')
//#endregion

/* ------------------------------- Views+Routes ----------------------------- */
//#region 
app.set('view engine', 'pug')
app.use('/', routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
//#endregion

/* ---------------------------------- Port ---------------------------------- */
app.listen(3000)
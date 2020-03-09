/* --------------------------------- Modules -------------------------------- */
//#region 
const fs = require('fs')
//#endregion

/* -------------------------------- loadTasks ------------------------------- */
//#region 
const loadTasks = () => {
    //aller chercher les data du fichier json
    try {
        const dataJSON = fs.readFileSync('./data/tasks.json').toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        //si le fichier n'existe pas retourner empty array
        return []
    }
}
//#endregion

/* -------------------------------- saveTasks ------------------------------- */
//#region 
const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync('./data/tasks.json', dataJSON)
}
//#endregion

/* --------------------------------- addTask -------------------------------- */
//#region 
const addTask = (index, title, description) => {
    const tasks = loadTasks()

    tasks.unshift({
        index: index,
        title: title,
        description: description
    })
    saveTasks(tasks)
}
//#endregion

/* ------------------------------- removeTask ------------------------------- */
//#region 
const removeTask = (Index) => {
    const tasks = loadNotes()
    const tasksToKeep = tasks.filter((task) => task.index != Index)
    if (tasks.length > tasksToKeep.length) {
        saveTasks(tasksToKeep)
    }
}
//#endregion

/* ----------------------------- Modules Exports ---------------------------- */
//#region 
module.exports = {
    loadTasks: loadTasks,
    addTask: addTask,
    removeTask: removeTask
}
//#endregion

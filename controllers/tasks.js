const getAllTasks = (req, res) => {
    res.send('all items from tasks')
}

const createTask = (req, res) => {
    res.send(req.body)
}
const getSingleTask = (req, res) => {
    res.send({id: req.params.id})
}
const deleteTask = (req, res) => {
    res.send('delete task')
}
const updateTask = (req, res) => {
    res.send('update Task')
}

module.exports = {
    getAllTasks, createTask, getSingleTask, deleteTask, updateTask
}
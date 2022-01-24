const getAllTasks = (req, res) => {
	res.send('get all tasks ');
};
const createTask = (req, res) => {
	res.json(req.body);
};
const getTask = (req, res) => {
	res.json(req.params.id);
};
const updateTask = (req, res) => {
	res.send('task updated');
};
const deleteTask = (req, res) => {
	res.send('task deleted');
};

module.exports = {
	getAllTasks,
	getTask,
	updateTask,
	deleteTask,
	createTask,
};

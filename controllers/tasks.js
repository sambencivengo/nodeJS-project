const Task = require('../models/task');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOne({ _id: taskID });

		if(!task){
			
		}
		res.status(200).json({ task });

	} catch (error) {

	}
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

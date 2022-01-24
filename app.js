const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
//middleware

app.use(express.json());

//routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks');
// app.post('/api/v1/tasks');
// app.get('/api/v1/tasks/:id');
// app.patch('/api/v1/tasks/:id');
// app.delete('/api/v1/tasks/:id');

const port = 3000;

const start = async () => {
	// we are awaiting the promise from connectDB
	// if the promise resolves, we connect to the database
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`server is listening on port ${port}`)
		);
	} catch (error) {
		// if the promise is rejected, then we log an error
		console.log(error);
	}
};

start();

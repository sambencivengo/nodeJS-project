const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

// custom 404
app.use(notFound);
// custom 500
app.use(errorHandlerMiddleware);

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

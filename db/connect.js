const mongoose = require('mongoose');

const connectionString =
	'mongodb+srv://sam:Brainwash692@nodeexpressprojects.ugvyv.mongodb.net/NODEJS-PROJECT?retryWrites=true&w=majority';

// this returns a promise, so we can use.then()
mongoose
	.connect(connectionString)
	.then(() => console.log('CONNECTED TO THE DB...'))
	.catch((err) => console.log(err));

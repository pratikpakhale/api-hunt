const mongoose = require('mongoose');

require('dotenv').config();
const config = require('./config');

const app = require('./app');

app.listen(config.port, () => {
	console.log(`Server listening on ${config.port}`);
	mongoose
		.connect(config.secrets.dbUrl, {
			useNewUrlParser: true,
		})
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch((error) => {
			console.log('Error connecting MongoDB');
		});
});

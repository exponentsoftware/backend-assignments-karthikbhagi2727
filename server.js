const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const studentsRoute = require('./routes/students');

//database connection

mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('MongoDB Connected…');
	})
	.catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', studentsRoute);

app.get('/', (req, res) => {
	res.send('This is Home Route');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
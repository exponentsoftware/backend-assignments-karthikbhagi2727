const express = require('express');
const router = express.Router();

const Book = require('../models/students');

//route to get list of all students
router.get('/', async (req, res) => {
	try {
		const students = await Student.find();
		res.json(students);
	} catch (err) {
		res.json({ message: err });
	}
});

//adds a student
router.post('/addstudent', async (req, res) => {
	const student = new Student({
		username: req.body.username,
        title: req.body.title,
		category: req.body.category
	});
	//save to database
	try {
		const savedStudent = await Student.save();
		res.json(savedStudent).status(200);
	} catch (err) {
		res.json({ message: err }).status(500);
	}
});



module.exports = router;
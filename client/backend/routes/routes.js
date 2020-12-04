const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel');
const MessageModel = require('../models/MessageModel');
const AnnoucementModel = require('../models/AnnoucementModel');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
	const saltPassword = await bcrypt.genSalt(10);
	const securePassword = await bcrypt.hash(req.body.password, saltPassword);
	const newUser = new UserModel({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: securePassword,
		department: req.body.department,
		position: 'empty',
		phone: 'empty',
		address: 'empty'
	});

	newUser
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json(error);
		});
});

router.post('/message', async (req, res) => {
	const newMessage = new MessageModel({
		name: req.body.name,
		title: req.body.title,
		message: req.body.message
	});

	newMessage
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json(error);
		});
});

router.post('/annoucement', async (req, res) => {
	const newAnnoucement = new AnnoucementModel({
		title: req.body.title,
		content: req.body.content,
		date: req.body.date
	});

	newAnnoucement
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.json(error);
		});
});

// router.get('/user', (req, res) => {
// 	console.log('User to Search', req.query.name);
// 	UserModel.find({ firstName: req.query.name })
// 		.then((user) => {
// 			res.json(user);
// 		})
// 		.catch((err) => {
// 			res.status(404).json(err);
// 		});
// });

// Login
router.get('/userid', (req, res) => {
	UserModel.find({ _id: req.query.id })
		.then((user) => {
			res.json(user);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.get('/login', (req, res) => {
	UserModel.find({ email: req.query.user })
		.then((user) => {
			// console.log(req.query.password);
			// console.log(user[0].password);
			bcrypt.compare(req.query.password, user[0].password, function(err, response) {
				if (response === true) {
					res.json(user[0]._id);
					console.log(user[0]._id);
				} else res.json('0');

				//res.json(response);
			});
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.get('/messages', (req, res) => {
	MessageModel.find({})
		.then((messages) => {
			res.json(messages);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.get('/annoucements', (req, res) => {
	AnnoucementModel.find({})
		.then((annoucements) => {
			res.json(annoucements);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

module.exports = router;

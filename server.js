const express = require("express");
const mongoose = require("mongoose");
const routesUrls = require('./routes/routes');

const app = express();

// Set up Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Company-App",
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
},
() => {
    console.log("Mongoose is connected")
});

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Heroku set up
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes 
app.use('/app', routesUrls);

// Port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const routesUrls = require('./routes/routes');
// const cors = require('cors');

// dotenv.config();

// //mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('DataBase Connected'));

// mongoose
// 	.connect('mongodb://localhost/Company-App', {
// 		useCreateIndex: true,
// 		useUnifiedTopology: true,
// 		useNewUrlParser: true,
// 		useFindAndModify: false
// 	})
// 	.then((db) => console.log('DB is connected'));

// app.use(express.json());
// app.use(cors());
// app.use('/app', routesUrls);

// app.listen(4000, () => console.log('Server is Running'));

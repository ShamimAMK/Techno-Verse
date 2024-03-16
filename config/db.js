const mongoose = require("mongoose");

//uri
const uri = process.env.MONGODB_URI;

const connectToDB = () => {
	//db connection
	mongoose
		.connect(uri)
		.then(() => {
			console.log("Database connected successfully.");
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = connectToDB;

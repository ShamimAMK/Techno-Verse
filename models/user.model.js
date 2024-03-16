const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		image: { type: String },
		phone: { type: String },
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
			required: true,
		},
	},
	{ timestams: true }
);

module.exports = mongoose.model("user", userSchema);

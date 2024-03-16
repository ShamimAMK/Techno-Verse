const createUser = async (res, req) => {
	try {
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const loginUser = async (res, req) => {};

module.exports = { createUser, loginUser };

// const error = new Error('Not Found');
// 		error.status = 404;
// 		return next(error);

class customAPIError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

const createCustomError = (message, statusCode) => {
	return new customAPIError(message, statusCode);
};

module.exports = { createCustomError, customAPIError };

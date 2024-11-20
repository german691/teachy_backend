class CustomError extends Error {
  constructor(message, statusCode = 500) {
    if (typeof message !== "string") {
      statusCode = message;
      message = "An error occurred";
    }
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isJoi = isJoi;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default CustomError;

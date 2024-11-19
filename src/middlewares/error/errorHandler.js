import CustomError from "./CustomError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
        statusCode: err.statusCode,
      },
    });
  }

  return res.status(500).json({
    error: {
      message: "Internal Server Error",
      statusCode: 500,
    },
  });
};

export default errorHandler;

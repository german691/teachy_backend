const errorHandler = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({
      error: {
        message: "Joi Validation Error",
        statusCode: 400,
        details: err.details || [],
      },
    });
  }

  return res.status(err.statusCode || 500).json({
    error: {
      message: err.message || "Internal Server Error",
      statusCode: err.statusCode || 500,
    },
  });
};

export default errorHandler;

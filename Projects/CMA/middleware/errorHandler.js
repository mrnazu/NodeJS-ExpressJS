const { constants } = require("../constants");
const errorHandler = function (err, req, res, next) {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        msg: err.message,
        stackTrace: err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        msg: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        msg: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        msg: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        msg: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("No Error, All good!");
      break;
  };
};

module.exports = errorHandler;

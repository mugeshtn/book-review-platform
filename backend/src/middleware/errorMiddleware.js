const errorMiddleware = (err, req, res, next) =>{
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode
    let message = err.message || "Internal server Error";

    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Token expired, please log in again.";
    } else if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid token, authorization denied.";
    } else if (err.name === "UnauthorizedError") {
        statusCode = 403;
        message = "You are not authorized to access this resource.";
    }else if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors).map((el) => el.message).join(", ");
    } else if (err.code === 11000) {
        statusCode = 400;
        message = "Duplicate value entered for a unique field.";
    } 
    res.status(statusCode).json({ message });
}  

export default errorMiddleware;
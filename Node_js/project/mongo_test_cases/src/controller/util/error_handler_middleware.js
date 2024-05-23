const  Error_handler_middleware = (err, req, res, next) => {
    if (err) {
        console.error(err); // Log the error for debugging
        let errCode = err.statusCode || 500;
        let errorMessage = err.message || "An unexpected error occurred";
        res.status(errCode).send({
            error: errorMessage,
            error_details:err.errors.errors,
        });
    } else {
        next();
    }
}

export { Error_handler_middleware };
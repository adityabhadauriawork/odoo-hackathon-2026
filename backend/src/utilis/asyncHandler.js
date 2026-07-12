/**
 * Wraps async route handlers to automatically catch errors and pass them to Express error handling middleware.
 */
export const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
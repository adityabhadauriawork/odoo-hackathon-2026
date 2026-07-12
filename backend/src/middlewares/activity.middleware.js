const activityMiddleware = (action) => {
  return (req, res, next) => {
    console.log({
      user: req.user?.fullName || "Unknown",
      action,
      method: req.method,
      url: req.originalUrl,
      time: new Date(),
    });

    next();
  };
};

export default activityMiddleware;
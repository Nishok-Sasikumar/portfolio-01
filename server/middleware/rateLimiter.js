exports.rateLimiter = (req, res, next) => {
  // A simple pass-through rate limiter.
  // In a production app, use express-rate-limit.
  next();
};

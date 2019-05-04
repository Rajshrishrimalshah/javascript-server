export const notFound = (err, req, res) => {
  const error = {
    error: err.error ? err.error : "Error",
    message: err.message ? err.message : "Error",
    status: err.status ? err.status : "500",
    timestamp: new Date()
  };
  res.status(error.status).json(error);
};

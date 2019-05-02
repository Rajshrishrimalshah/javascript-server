import * as express from 'express';

const error = {
  error: "Not Found",
  message: "error",
  status: 500,
  timestamp: "2019-01-08T17:38:21.929Z"
  };

  export const errorHandler = (err, req, res, next) => {

    res.status(500).send(err);
  }

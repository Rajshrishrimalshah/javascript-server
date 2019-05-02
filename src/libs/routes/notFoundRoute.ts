import * as express from "express";
export const notFoundRoute = (req,res) => {
  res.status(404).send('Not Found');
}

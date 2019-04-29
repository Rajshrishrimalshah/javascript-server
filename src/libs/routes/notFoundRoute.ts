import * as express from "express";
export const notFound = (req,res) => {
  res.status(404).send('Not Found');
}

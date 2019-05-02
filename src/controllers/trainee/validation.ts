import { checkSchema, validationResult } from "express-validator/check";

export const validation = () => {
  return ((req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(res.status(424).json({ errors: errors.array() }));
    }
    next();

  });

};


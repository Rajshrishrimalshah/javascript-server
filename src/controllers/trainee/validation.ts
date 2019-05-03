import { validationResult } from "express-validator/check";

export const validation = () => {
  return (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(res.json({ errors: errors.array() }));
    }
    next();
  };
};

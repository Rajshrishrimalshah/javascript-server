import { check } from "express-validator/check";

export const schema: any = {
  signup: {
    email: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Email is required",
        negated: true
      },
      isString: true,
    },
    id: {
      in: ["body"],
      isEmpty: {
        errorMessage: "ID is required",
        negated: true
      },
      isInt: true,
    },
  },
};

Object.freeze(schema);

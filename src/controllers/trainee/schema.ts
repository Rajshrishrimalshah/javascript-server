import { check } from "express-validator/check";

export const schema: any = {
  create: {
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
    name: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Name is required",
        negated: true
      },
      isLength: {
        errorMessage: "length must be 3 characters",
        options: { min: 3 }
      },
      isString: true,
    },
  },
  delete: {
    id: {
      in: ["body"],
      isEmpty: {
        errorMessage: "ID is required",
        negated: true
      },
      isInt: true,
    }
  },
  get: {
    limit: {
      errorMessage: "Limit is invalid",
      in: ["body"],
      isInt: false,
      isString: false,
    },
    skip: {
      in: ["body"],
      isInt: false,
      options: (value) => {
        let sanitizedValue;
        sanitizedValue = 0;
        return sanitizedValue;
      }
    },
  },
  update: {
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

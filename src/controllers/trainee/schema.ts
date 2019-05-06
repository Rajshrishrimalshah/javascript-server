import { check } from "express-validator/check";

export const schema: any = {
  create: {
    id: {
      in: ["body"],
      isInt: true,
      isEmpty: {
        errorMessage: "ID is required",
        negated: true
      }
    },
    name: {
      in: ["body"],
      isString: true,
      isEmpty: {
        errorMessage: "Name is required",
        negated: true
      },
      isLength: {
        errorMessage: "length must be 3 characters",
        options: { min: 3 }
      }
    },
    email: {
      in: ["body"],
      isString: true,
      isEmpty: {
        errorMessage: "Email is required",
        negated: true
      }
    }
  },
  delete: {
    id: {
      in: ["body"],
      isInt: true,
      isEmpty: {
        errorMessage: "ID is required",
        negated: true
      }
    }
  },
  update: {
    id: {
      in: ["body"],
      isInt: true,
      isEmpty: {
        errorMessage: "ID is required",
        negated: true
      }
    },
    dataToUpdate: {
      in: ['body'],
      isString: false,
      isObject: false,
      custom: function(dataToUpdate) {},
  }
  },
  get: {
    skip: {
      in: ["body"],
      isInt: false,
      options: value => {
        let sanitizedValue;
        sanitizedValue = 0;
        return sanitizedValue;
      }
    },
    limit: {
      isString: false,
      isInt: false,
      in: ['body'],
      errorMessage: 'Limit is invalid',
    }
  }
};
Object.freeze(schema);

import { check } from "express-validator/check";

export const schema: any = {
  create: {
    id: {
      in: ["body"],
      isInt: true,
      isEmpty: {
        errorMessage: "ID is required",
        negated: true,
      },
    },
    name: {
      in: ["body"],
      isString: true,
      isEmpty: {
        errorMessage: "Name is required",
        negated: true,
      },
      isLength: {
        errorMessage: 'length must be 3 characters',
        options: { min: 3 },
    },
    email:{
      in: ["body"],
      isString: true,
      isEmpty: {
        errorMessage: "Email is required",
        negated: true,
      },
    },
    }
  },
  delete: {
    id: {
      in: ["body"],
      isInt: true,
      isEmpty: {
        errorMessage: "ID is required",
        negated: true,
      },
    },
  },
  update: {
    id: {
      in: ["body"],
      isInt: true,
      isEmpty: {
        errorMessage: "ID is required",
        negated: true,
      },
    },
  }
};
Object.freeze(schema);
/*create: {
    id: {
      required: true,
      string: true,
      in: ["body"],
      custom: function(value) {
        console.log("Value", value);
        throw { error: "Error Occured", message: "Message" };
      }
    },
    name: {
      required: true,
      regex: "",
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: true,
      errorMessage: "Id is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      errorMessage: "Limit is invalid"
    }
  },
  update: {
    id: {
      required: true,
      string: true,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {}
    }
  }
};*/

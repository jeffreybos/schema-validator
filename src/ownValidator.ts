import { string, createValidator, number, array, object, boolean } from "./validator";

let userSchema = createValidator({
  name: string(),
  age: number(),
  siblings: array(),
  metaData: object(),
  active: boolean(),
});

// Validates true
const personObj = {
  name: 'James',
  age: 25,
  siblings: ['Johnnathan'],
  metaData: {},
  active: true,
};

// Validates false
const personObjF = {
  name: 'James',
  age: 25,
  active: true,
};

export const ownValidator = () => {
  // Validate without error
  userSchema.validate(personObj);

  // Validate with error
  userSchema.validate(personObjF);
}
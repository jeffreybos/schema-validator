import { object, string, number, array, boolean } from "yup";

const userSchema = object({
  name: string().required("Name is required"),
  age: number().required("Age is required"),
  siblings: array().required("Sibblings are required"),
  metaData: object().required("Metadata is required"),
  active: boolean().required("Active is required"),
})

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

export const yupValidator = async () => {
  // Validate without error
  await userSchema.validate(personObj);

  // Validate with error
  await userSchema.validate(personObjF);
}

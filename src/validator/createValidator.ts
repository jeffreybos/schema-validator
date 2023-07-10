interface IObject {
  [key: string]: any;
}

export default function createValidator(schema: IObject) {
  return {
    validate: function (value: IObject) {
      if (typeof value !== "object" || value === null) {
        throw new Error("Expected an object");
      }

      // Loop through the keys of the validating schema
      for (let key in schema) {
        if (!value.hasOwnProperty(key)) {
          throw new Error("Missing property: " + key);
        }

        // Validate the value of the key with the corresponding validator
        schema[key].validate(value[key]);
      }
    }
  };
}
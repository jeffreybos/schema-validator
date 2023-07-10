import { describe, expect, it } from 'vitest'
import { string, createValidator, number, array } from "../src/validator";

describe('createValidator()', () => {
  it('should not throw an error when the value is an object', () => {
    const validator = createValidator({
      name: string(),
      age: number(),
      dogs: array()
    });
    expect(() => validator.validate({
      name: "Jeffrey",
      age: 33,
      dogs: ["Bob", "Semmy"]
    })).not.toThrow();
  })

  it('should throw an error when the value is not an object', () => {
    const validator = createValidator({ name: string() });
    expect(() => validator.validate(1)).to.throw('Expected an object');
  })

  it("should thrown an error when the value is missing a property", () => {
    const validator = createValidator({ name: string(), age: number() });
    const validatorDogs = createValidator({ name: string(), age: number(), dogs: array() });
    expect(() => validator.validate({ name: "Jeffrey" })).to.throw("Missing property: age");
    expect(() => validatorDogs.validate({ name: "Jeffrey", age: 33, sibblings: [] })).to.throw("Missing property: dogs");
  })
})
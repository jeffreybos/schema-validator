import { assert, describe, expect, test, it } from 'vitest'
import { string, createValidator, number, array, object, boolean } from "../src/validator";

describe('string()', () => {
  it("shoud not return an error", () => {
    expect(() => string().validate("Jeffrey")).not.toThrow();
  })

  it("shoud return an error", () => {
    expect(() => string().validate(10)).toThrow(new Error("Expected a string"));
    expect(() => string().validate({})).toThrow(new Error("Expected a string"));
    expect(() => string().validate([])).toThrow(new Error("Expected a string"));
    expect(() => string().validate(true)).toThrow(new Error("Expected a string"));
    expect(() => string().validate()).toThrow(new Error("Expected a string"));
  })
})

describe('number()', () => {
  it("shoud not return an error", () => {
    expect(() => number().validate(33)).not.toThrow();
    expect(() => number().validate(112 + 33)).not.toThrow();
  })

  it("shoud return an error", () => {
    expect(() => number().validate("Jeffrey")).toThrow(new Error("Expected a number"));
    expect(() => number().validate({})).toThrow(new Error("Expected a number"));
    expect(() => number().validate([])).toThrow(new Error("Expected a number"));
    expect(() => number().validate(true)).toThrow(new Error("Expected a number"));
    expect(() => number().validate()).toThrow(new Error("Expected a number"));
  })
})

describe('array()', () => {
  it("shoud not return an error", () => {
    expect(() => array().validate([])).not.toThrow();
    expect(() => array().validate(["Jeffrey", "Bos"])).not.toThrow();
  })

  it("shoud return an error", () => {
    expect(() => array().validate("Jeffrey")).toThrow(new Error("Expected a array"));
    expect(() => array().validate({})).toThrow(new Error("Expected a array"));
    expect(() => array().validate(10)).toThrow(new Error("Expected a array"));
    expect(() => array().validate(true)).toThrow(new Error("Expected a array"));
    expect(() => array().validate()).toThrow(new Error("Expected a array"));
  })
})

describe('object()', () => {
  it("shoud not return an error", () => {
    expect(() => object().validate({})).not.toThrow();
    expect(() => object().validate({ name: "Jeffrey", age: 33 })).not.toThrow();
  })

  it("shoud return an error", () => {
    expect(() => object().validate("Jeffrey")).toThrow(new Error("Expected an object"));
    expect(() => object().validate([])).toThrow(new Error("Expected an object"));
    expect(() => object().validate(new Date())).toThrow(new Error("Expected an object"));
    expect(() => object().validate(10)).toThrow(new Error("Expected an object"));
    expect(() => object().validate(true)).toThrow(new Error("Expected an object"));
    expect(() => object().validate()).toThrow(new Error("Expected an object"));
  })
})

describe('boolean()', () => {
  it("shoud not return an error", () => {
    expect(() => boolean().validate(true)).not.toThrow();
    expect(() => boolean().validate(false)).not.toThrow();
    expect(() => boolean().validate(true === true)).not.toThrow();
    expect(() => boolean().validate(!false)).not.toThrow();
    expect(() => boolean().validate(!!10)).not.toThrow();
    expect(() => boolean().validate(!!!10)).not.toThrow();
  })

  it("shoud return an error", () => {
    expect(() => boolean().validate("Jeffrey")).toThrow(new Error("Expected a boolean"));
    expect(() => boolean().validate([])).toThrow(new Error("Expected a boolean"));
    expect(() => boolean().validate(10)).toThrow(new Error("Expected a boolean"));
    expect(() => boolean().validate()).toThrow(new Error("Expected a boolean"));
  })
})

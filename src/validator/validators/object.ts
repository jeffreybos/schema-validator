export default function object() {
  return {
    validate: function (value: Object) {
      // Check if the value is a plain object, array, date, null, etc. are not allowed
      if (value === null || Object.prototype.toString.call(value) !== "[object Object]") {
        throw new Error("Expected an object");
      }
    }
  };
}
export default function boolean() {
  return {
    validate: function (value: boolean) {
      if (typeof value !== "boolean") {
        throw new Error("Expected a boolean");
      }
    }
  };
}
export default function string() {
  return {
    validate: function (value: string) {
      if (typeof value !== "string") {
        throw new Error("Expected a string");
      }
    }
  };
}
export default function number() {
  return {
    validate: function (value: number) {
      if (typeof value !== "number") {
        throw new Error("Expected a number");
      }
    }
  };
}
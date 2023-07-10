export default function array() {
  return {
    validate: function (value: any[]) {
      if (!Array.isArray(value)) {
        throw new Error("Expected a array");
      }
    }
  };
}
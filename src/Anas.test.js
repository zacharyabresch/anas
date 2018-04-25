const Anas = require("./Anas");

describe("Anas", () => {
  it("is an instance of Anas", () => {
    const anas = new Anas();
    expect(anas).toBeInstanceOf(Anas);
  });
});

const Anas = require("./Anas");

const options = {
  repository: null,
  file: null,
  copyDestination: null,
  cloneDestination: null
};

describe("Anas", () => {
  it("is an instance of Anas", () => {
    const anas = new Anas(options);
    expect(anas).toBeInstanceOf(Anas);
  });
});

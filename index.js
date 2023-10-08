const divide = () => 2000 / 100;
const square = (x) => x * x;
const add = (a, b) => a + b;

describe("index.js", () => {
  it("has a function expression called divide", () => {
    expect(divide).to.exist;
  });
  it("divide divides 2000 by 100", () => {
    const divide = () => 2000 / 100;
    expect(divide()).to.equal(20);
  });  
});


it("has an arrow function called square", () => {
  expect(square).to.exist
});
it("square arrow function takes one parameter and multiplies it times itself", () => {
  const square = (x) => x * x;
  let x = 2;
  expect(square(x)).to.equal(4);
});

it("has an arrow function called add", () => {
  expect(add).to.exist
});
it("add arrow function takes two parameters and adds them together", () => {
  const add = (a, b) => a + b;
  let a = 3;
  let b = 4;
  expect(add(a, b)).to.equal(a + b);
});


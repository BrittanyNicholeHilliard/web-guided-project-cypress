// write tests here
describe("Quotes App", () => {
  beforeEach(() => {
    // This runs before every test in our testing suite
    // Start each test with fresh state
    cy.visit("http://localhost:1234") // Make sure this is the port that's running!
  })

  // GETTERS
  const textInput = () => cy.get("input[name=text]");
  const authorInput = () => cy.get("input[name=author]");
  const foobarInput = () => cy.get("input[name=foobar]");
  const submitBtn = () => cy.get(`button[id="submitBtn"]`);
  const cancelBtn = () => cy.get(`button[id="cancelBtn"]`);

  it("sanity check to make sure tests work", () => {
    // "it" is a test
    // "expect" is an assertion
    // There can be multiple assertions per test,
    // buuuuut all the assertions have to eal with
    // the ONE THING that we're testing
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); // passing test? Or failing test? passing test!!!
    // {} === {} => FALSE
    expect({}).to.eql({}); // ==
  })

  it("the proper elements are showing", () => {
    textInput().should("exist");
    foobarInput().should("not.exist");
    authorInput().should("exist");
    submitBtn().should("exist");
    cancelBtn().should("exist");

    cy.contains("Submit Quote").should("exist");
    cy.contains(/submit quote/i).should("exist");
  })

  describe("Filling out the inputs and cancelling", () => {
    
  })







})

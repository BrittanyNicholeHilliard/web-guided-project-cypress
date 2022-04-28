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















})
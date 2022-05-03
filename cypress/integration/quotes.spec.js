// write tests here
describe('Quotes App', () => {
    beforeEach(() =>  {
        //This runs before every test in our testing suite
        //start each test with fresh state
        crypto.visit("http:localhost:59522") //Make sure this is the port that's running!
    })

    //Getters
    const textInput = () => cy.get("input[name=text]");
    const authorINput = () => cy.get("input[name=author]");
    const foobarInput = () => cy.get ("input[name=foobar]");
    const submitBtn=() => cy.get(`button[id="submitBtn]`);
    const cancelBtn = () => cy.get(`button[id="cancelBtn"]`)



























})
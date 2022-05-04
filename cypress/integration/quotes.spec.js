import { contentType } from "express/lib/response";

// write tests here
describe('Quotes App', () => {
    beforeEach(() =>  {
        //This runs before every test in our testing suite
        //start each test with fresh state
        cy.visit('http://localhost:1234') //Make sure this is the port that's running on npm install!
    })

    //Getters
    const textInput = () => cy.get("input[name=text]");
    const authorInput = () => cy.get("input[name=author]");
    const foobarInput = () => cy.get ("input[name=foobar]");
    const submitBtn=() => cy.get(`button[id="submitBtn"]`);
    const cancelBtn = () => cy.get(`button[id="cancelBtn"]`)

    it('sanity check to make sure tests work', () => {
        //"it" is a test 
        //"expect" is an assertion
        //there can be multiple assertions per test, 
        //but all assertions must deal with ONE thing we're testing
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({}); //--passing--- equivalent to ===
        /// {} ==={} => False, memory addresses!

        expect ({}).to.eql({}); // is equivalent to ""=="
    })

    it('the proper elements are showing', () => {
        textInput().should('exist');
        foobarInput().should('not.exist');
        authorInput().should('exist');
        submitBtn().should('exist');
        cancelBtn().should('exist');
        cancelBtn().should('exist');

        cy.contains('Submit Quote').should('exist'); //<---case sensitive
        //cy.contains(/submit quote/i).should('exist'); //<--- case insenstive
    })

        describe("filling out the inputs and cancelling", () => {
            it('can navigate to the site', () => {
                cy.url().should('include', 'localhost') 
            })

            it('submit button starts out disabled', () =>{ 
            submitBtn().should('be.disabled');
            })

            it('can type in the inputs', () => {
                textInput().should('have.value', "")
                    .type('lorem ipsum')
                    .should('have.value', 'lorem ipsum');
                authorInput().should('have.value', '')
                .type('Brittany')
                .should('have.value', 'Brittany');
            })
        
            it('submitbtn enables when both inputs are filled out', () => {
                authorInput().type('Brittany');
                textInput().type('FUN');
                submitBtn().should('not.be.disabled');
            })

            it('the cancel button can reset the inputs and disabled the submit button', () =>{
                authorInput().type("Brittany");
                textInput().type('lorem');
                cancelBtn().click();
                textInput().should('have.value', '');
                authorInput().should('have.value', '');
            })
        })

    describe('adding a new quote', () => {
        it('can submit and delete a new quote', () => {
           textInput().type('web 54 rocks');
           authorInput().type('CRHARDING');
           submitBtn().click();

           cy.contains('web 54 rocks').siblings("button:nth-of-type(2)").click();
           cy.contains('web 54 rocks').should('not.exist')
        })
    
    it('variation of can submit a new quote', () => {
        textInput().type('woohoo!');
        authorInput.type("bhilliard");
        submitBtn.click();
        cy.contains('woohoo!').should('exist');
        cy.contains('woohoo!').next().next().click();
        cy.contains('woohoo!').should('not.exist');
    })
    
    
    })




})
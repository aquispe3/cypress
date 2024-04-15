describe('Login',()=>{
    it('Prueba de usuario incorrecto',()=>{
        /*cy.visit('http://127.0.0.1:3000/login');  // comprobamos si la pagina esta arriba
        cy.get('#usuario').type("sdsd"); 
        cy.get('#contrasenia').type("sdsds");
        cy.get('#btnIngresar').click()*/
        cy.login("sdsd","sdsds")
        cy.contains('h4','Error')
    })
    it('Prueba de usuario correcto',()=>{
        /*cy.visit('http://127.0.0.1:3000/login');  // comprobamos si la pagina esta arriba
        cy.get('#usuario').type("aquispe"); 
        cy.get('#contrasenia').type("12345");
        cy.get('#btnIngresar').click()*/
        cy.login("aquispe","12345")
        cy.url().should('eq','http://127.0.0.1:3000/');
    })
})
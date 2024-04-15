describe('Guitarra',()=>{
    it('Prueba de existencia 4 guitarras',()=>{
        cy.visit('http://127.0.0.1:3000/login');  // comprobamos si la pagina esta arriba
        cy.get('#usuario').type("sdsd"); 
        cy.get('#contrasenia').type("sdsds");
        cy.get('#btnIngresar').click()
        // .. mostrar la pagina de incio
        // .. visitar la pagina de guitarras http://127.0.0.1:3000/guitarras
        // .. deberias poder encontrar el texto "4 guitars"
    })
})
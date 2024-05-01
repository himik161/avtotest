describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     })
     it('восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail');
        cy.get('#pass');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
it('негативный кейс авторизации, НЕ правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german@dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio6');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Такого логина или пароля нет');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it('негативный кейс авторизации, НЕ правильный логин', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german@dolnik.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Такого логина или пароля нет');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    

 })
 it(' негативный кейс валидации, НЕ вводить @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it(' проверка реакции к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

})


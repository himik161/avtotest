describe('Покупка аватара', function () {                               
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.me/');                          
         cy.get('input[type="email"]').type('edouardpolovinkin@yandex.ru');      
         cy.get('input[type="password"]').type('Edik30042012');    
         cy.get('button[type="submit"]').click();                        
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(3) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Eduard Polovinkin')
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456'); 
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');   
     });
 });
 
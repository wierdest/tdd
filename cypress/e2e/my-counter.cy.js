describe('MyCounter Component', () => {

  beforeEach(() => { 
    cy.visit('/')
  })

  it('deve existir', () => {
    cy.get('my-counter').then(el => el[0].shadowRoot).should('exist')
  })

  it('deve conter um botão', () => {
    cy.get('my-counter').then(el => el[0].shadowRoot).find('button').should('exist')
  })

  it('deve conter o texto incrementar no botão', () => {
    cy.get('my-counter').then(el => el[0].shadowRoot).find('button').should('contain', 'Incrementar')
  })

  it('deve conter um span', () => {
    cy.get('my-counter').then(el => el[0].shadowRoot).find('span').should('exist')
  })
  
  it('deve mostrar valor inicial 1', () => {
    cy.get('my-counter').then(el => el[0].shadowRoot).find('span').should('contain', 1)
  })

})
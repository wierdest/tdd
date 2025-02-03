describe('MyCounter Component', () => {
  beforeEach(() => { 
    cy.visit('/')
  })
  
  it('deve existir', () => {
   cy.get('my-counter').then($el => $el[0].shadowRoot).should('exist')
  })

  it('deve conter um título', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('h1').should('exist')
  })

  it('deve conter texto MyCounter no título', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('h1').should('contain', 'MyCounter')
  })
  
  it('deve conter um botão', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('button').should('exist')
  })

  it('deve conter o texto Incrementar até o máximo de 2 no botão', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('button').should('contain', 'Incrementar até o máximo de 2')
  })

  it('deve conter um span', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('span').should('exist')
  })
  
  it('deve mostrar valor inicial 1', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('span').should('contain', 1)
  })

  it('deve incrementar o valor no click do botão', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('button').click()
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('span').should('contain', 2)
  })

  it('deve limitar o valor a 2, retornando o valor a 1 ao ultrapassar 2', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('button').click().click()
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('span').should('contain', 1)
  })

  it('deve conter um span acima do checkbox', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('span:contains(Checkbox)')
  })

  it('deve conter um checkbox', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('[type="checkbox"]').should('exist')
  })

  it('deve digitar no input', () => {
    cy.get('my-counter').then($el => $el[0].shadowRoot).find('[type="text"]').type('Vão bora!')
  })
})
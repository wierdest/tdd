describe('MyCounter Component', () => {
  let el
  beforeEach(() => { 
    cy.visit('/')
    el = cy.get('my-counter').then(el => el[0].shadowRoot)
  })

  it('deve existir', () => {
    el.should('exist')
  })

  it('deve conter um botão', () => {
    el.find('button').should('exist')
  })

  it('deve conter um span', () => {
    el.find('span').should('exist')
  })

  it('deve mostrar valor inicial 1', () => {
    el.find('span').should('contain', 1)
  })

})
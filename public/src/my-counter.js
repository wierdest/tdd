import { LitElement, html, css } from 'lit';

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number },
  }

  static styles = [
    css`
      .page {
        display: flex;
        gap: 20px;
        flex-direction: column
      }
    `
  ]
  
  set count (value) {
    this._count = value
    // aqui pode ter uma lógica para atualizar 
    // outros valores quando Count mudar, por exemplo
  }

  get count () {
    // é preciso retornar uma variável diferente para evitar um loop infinito
    return this._count
  }

  _increment() {
    this.count = this.count + 1
    if (this.count > 2) {
      this.count = 1
    }
    this.requestUpdate()
  }

  constructor() {
    super();
    this.count = 1
  }

  render() {
    return html`
      <div class="page">
        <h1>MyCounter</h1>
        <div>
          <span>${this.count}</span>
          <button @click=${() => this._increment()}>Incrementar até o máximo de 2</button>
        </div>
        <div>
          <span>Checkbox</span>
          <input type="checkbox"/>
        </div>
        <div>
          <input type="text" placeholder="Digite aqui"/>
        </div>
      </div>
    `
  }
}

customElements.define('my-counter', MyCounter)
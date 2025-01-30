import { LitElement, html } from 'lit';

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 1;
  }


  render() {
    return html`
      <div>
        <span>${this.count}</span>
        <button></button>
      </div>
    `;
  }
}

customElements.define('my-counter', MyCounter);
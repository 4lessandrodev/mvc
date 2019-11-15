import { tg } from '../frameWork.js';
export class View {
  constructor (seletor) {
    this.$seletor = tg.$(seletor);
  }

  getTemplate() {
    throw new Error('Metodo getTemplate deve ser implementado pelas classes que herdam a View');
  }
}
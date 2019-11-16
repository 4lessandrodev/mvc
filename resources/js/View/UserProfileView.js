import { tg } from '../frameWork.js';
import { View } from './View.js';

export class UserProfileView extends View {
  constructor (seletor) {
    super(seletor);
  }
  atualizarDadosDaView(label, valor) {
    label.textContent = valor;
  }
}
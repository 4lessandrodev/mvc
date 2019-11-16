import { View } from './View.js';
import { tg } from '../frameWork.js';

export class UsuarioView extends View {
  constructor (seletor) {
    super(seletor);
  }
  mensagemDeAlerta(campo) {
    swal("Campos em branco!", `Preencha o campo ${campo.name}`, "warning");
    this.adicionarListenerNoBotaoOk(campo);
  }
  mensagemDeSucesso(campos) {
    swal("Feito!", "Usuário criado com sucesso!", "success");
    this.adicionarListenerNoBotaoOk(campos[0]);
  }
  limparCampos(campos) {
    for (let campo of campos) {
      campo.value = '';
    }
    this.adicionarListenerNoBotaoOk(campos[0]);
  }
  adicionarListenerNoBotaoOk(campo) {
    const btnOk = tg.$('.swal-button');
    btnOk.addEventListener('click', function () {
      campo.focus();
    })
  }
}
import { tg } from '../frameWork.js';

export class UsuarioController {
  constructor (model, view) {
    this.model = model;
    this.view = view;
  }
  validarDados(campos) {
    const user = new Object(null);
    for (let campo of campos) {
      if (campo.value == '' || campo.value == null || campo.value == undefined) {
        this.view.mensagemDeAlerta(campo);
        return;
      } else {
        user[campo.name] = campo.value;
      }
    }
    this.model.usuarios(user);
    this.view.mensagemDeSucesso(campos);
    this.view.limparCampos(campos);
  }
}
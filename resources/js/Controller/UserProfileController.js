import { tg } from '../frameWork.js';
export class UserProfileController {
  constructor (model, view) {
    this.model = model;
    this.view = view;
  }
  criarDadosParaCadaLabel(usuario, labels) {
    const profile = new Object(null);
    for (let propriedade of labels) {
      //console.log(propriedade.className);
      //console.log(usuario[propriedade.className]);
      profile[propriedade.className] = usuario[propriedade.className];
      this.view.atualizarDadosDaView(propriedade, usuario[propriedade.className]);
    }
    //console.log(profile);
    this.model.definirPerfil(profile);
  }
}
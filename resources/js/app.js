import { UsuarioModel } from './Model/UsuarioModel.js';
import { UsuarioView } from './View/UsuarioView.js';
import { UsuarioController } from './Controller/UsuarioController.js';
import { tg } from './frameWork.js';



const usuarioModel = new UsuarioModel();
const usuarioView = new UsuarioView('.formulario');
const usuarioController = new UsuarioController(usuarioModel, usuarioView);

const btnSalvar = tg.$('[name=btn-salvar]');

const campos = tg.$$('.campo');
btnSalvar.addEventListener('click', function () {
  usuarioController.validarDados(campos);
})


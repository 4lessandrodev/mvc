import { UsuarioModel } from './Model/UsuarioModel.js';
import { UsuarioView } from './View/UsuarioView.js';
import { UsuarioController } from './Controller/UsuarioController.js';



const usuarioModel = new UsuarioModel();
const usuarioView = new UsuarioView('.formulario');
const usuarioController = new UsuarioController(usuarioModel, usuarioView);

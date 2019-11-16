import { tg } from './frameWork.js';
//-------------------------------------------------------------------
import { UsuarioModel } from './Model/UsuarioModel.js';
import { UsuarioView } from './View/UsuarioView.js';
import { UsuarioController } from './Controller/UsuarioController.js';
//--------------------------------------------------------------------
import { UserProfileModel } from './Model/UserProfileModel.js';
import { UserProfileView } from './View/UserProfileView.js';
import { UserProfileController } from './Controller/UserProfileController.js';


const page = window.location.pathname;


if (page == '/createUser.html') {
  //---------------------------- Cadastro de usuário--------------------
  const usuarioModel = new UsuarioModel();
  const usuarioView = new UsuarioView('.formulario');
  const usuarioController = new UsuarioController(usuarioModel, usuarioView);

  const btnSalvar = tg.$('[name=btn-salvar]');

  const campos = tg.$$('.campo');
  btnSalvar.addEventListener('click', function () {
    usuarioController.validarDados(campos);
  });
  //------------------------------------------------------------------------
}


if (page == '/profile.html') {
  //---------------------------- Perfil de usuário --------------------
  const userProfileModel = new UserProfileModel();
  const userProfileView = new UserProfileView('.info');
  const userProfileController = new UserProfileController(userProfileModel, userProfileView);

  const infoLabels = tg.$$('p');

  const obterPerfil = perfil => {
    perfil = localStorage.getItem('usuario');
    perfil = JSON.parse(perfil);
    return perfil;
  };
  userProfileController.criarDadosParaCadaLabel(obterPerfil(), infoLabels);

  //------------------------------------------------------------------------
}
export class UsuarioModel {
  constructor (usuario) {
    this.usuario = usuario;
  }
  usuarios(user) {
    this.usuario = user;
    this.salvarUsuario(user);
  }
  salvarUsuario(user) {
    let usuario = JSON.stringify(user);
    localStorage.setItem('usuario', usuario);
  }
}
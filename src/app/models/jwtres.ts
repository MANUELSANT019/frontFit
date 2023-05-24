export interface Jwtres {
  usuario: string;
  correo: string;
  clave: string;
  token: string; // Actualizado: usar 'token' en lugar de 'accessToken'
  expiresIn: string;
}

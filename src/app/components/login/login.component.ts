import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correo: string = '';
  clave: string = '';

  constructor(private authenticationService: AuthenticationService) {}

  login(event: Event): void {
    const usuario: Usuario = {
      correo: this.correo, clave: this.clave,
      usuario: ''
    }
    this.authenticationService.login(usuario).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    )
  }
}

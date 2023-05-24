import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Model
import { Usuario } from '../models/usuario';
import { Jwtres } from '../models/jwtres';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  apiUri = '/api/usuario';
  private token: string | null = null; // Corregido: inicializar como null


  constructor(private httpClient: HttpClient) {}

  private saveToken(token: string, expiresIn: string) {
    localStorage.setItem('token', token); // Actualizado: usar 'token' en lugar de 'accessToken'
    localStorage.setItem('expiresIn', expiresIn);
    this.token = token;
  }

  login(usuario: Usuario): Observable<Jwtres> {
    return this.httpClient.post<Jwtres>(this.apiUri+'/login', usuario).pipe(
      tap((res: Jwtres) => {
        if (res && res.token && res.expiresIn) { // Verifica que el objeto de respuesta contenga los campos necesarios
          this.saveToken(res.token, res.expiresIn);
        }
      })
    );
  }
  
}

import { Injectable } from '@angular/core';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private validCredentials = {
    email: 'test@mail.ru',
    password: '123456'
  };

  constructor() { }

  login(email: string, password: string) {
    if (
      email === this.validCredentials.email &&
      password === this.validCredentials.password
    ) {
      return of({ success: true, token: 'some token' }).pipe(
        delay(1000)
      );
    } else {
      return throwError({ success: false, message: 'Invalid email or password' }).pipe(delay(1000));
    }
  }
}

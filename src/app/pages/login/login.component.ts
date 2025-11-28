import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nickname: string = '';
  password: string = '';

  login() {
    if (this.nickname === 'Alcina' && this.password === '123456') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Nickname ou senha incorretos!');
    }
  }
}
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @Output() loginSuccess = new EventEmitter<void>();

  nickname: string = '';
  password: string = '';

  login() {
    if (this.nickname === 'Alcina' && this.password === '123456') {
      this.loginSuccess.emit();
    } else {
      alert('Nickname ou senha incorretos!');
    }
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-comunidade',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent {
  loggedIn = false;

  onLoginSuccess() {
    this.loggedIn = true;
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';

  cadastrar() {
    window.alert('Obrigado! Vamos entrar em contato por email para confirmar sua conta.');
  }
}
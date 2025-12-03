import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngIf e *ngFor
import { FormsModule } from '@angular/forms';   // Importante para [(ngModel)] do input

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionando os módulos necessários
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Controle de Estado (O que aparece na tela)
  usuarioLogado = false;
  exibirCadastro = false; // false = Login, true = Cadastro
  
  // Dados do novo post
  novoPostTexto = '';

  // Lista de Posts (Começa com um de exemplo)
  posts = [
    { 
      nome: 'Maria Silva', 
      texto: 'Comprei o Kit #3 e estou apaixonada! Acabamento perfeito.', 
      tempo: '2 horas atrás',
      avatarIcon: 'fas fa-smile' 
    }
  ];

  // Alterna entre as abas "Entrar" e "Cadastrar"
  toggleForm(tipo: 'entrar' | 'cadastrar') {
    this.exibirCadastro = (tipo === 'cadastrar');
  }

  // Simula o login
  realizarLogin() {
    // Aqui você validaria o form, mas por enquanto só loga direto
    this.usuarioLogado = true;
  }

  // Desloga
  sair() {
    this.usuarioLogado = false;
    this.novoPostTexto = ''; // Limpa o campo por segurança
  }

  // Cria um novo post
  criarPost() {
    if (!this.novoPostTexto.trim()) return;

    // Adiciona no topo da lista (unshift)
    this.posts.unshift({
      nome: 'Você',
      texto: this.novoPostTexto,
      tempo: 'Agora mesmo',
      avatarIcon: 'fas fa-user'
    });

    this.novoPostTexto = ''; // Limpa o campo
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Define qual seção está visível.
  secaoAtiva: 'sobre' | 'termos' | 'privacidade' = 'sobre';

  // trocar a seção 
  mudarSecao(secao: 'sobre' | 'termos' | 'privacidade') {
    this.secaoAtiva = secao;
    // Rola 
    document.querySelector('.card-conteudo')?.scrollIntoView({ behavior: 'smooth' });
  }
}
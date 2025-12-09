import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule], // Importante para o loop funcionar
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  // Pega a referência da "trilha" do carrossel no HTML
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  // Lista de Produtos para o Carrossel
  produtos = [
    { nome: 'Tiara Princesa', icon: 'fa-crown', preco: 'R$ 25,00' },
    { nome: 'Laço Boutique', icon: 'fa-ribbon', preco: 'R$ 18,00' },
    { nome: 'Faixinha RN', icon: 'fa-baby', preco: 'R$ 15,00' },
    { nome: 'Kit Presente', icon: 'fa-heart', preco: 'R$ 45,00' },
    { nome: 'Turbante Luxo', icon: 'fa-gem', preco: 'R$ 30,00' },
    { nome: 'Presilha Flor', icon: 'fa-spa', preco: 'R$ 12,00' }
  ];

  // Função para mover o carrossel
  scroll(direction: 'left' | 'right') {
    const track = this.carouselTrack.nativeElement;
    const scrollAmount = 320; // Quantidade de pixels que roda por clique

    if (direction === 'left') {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
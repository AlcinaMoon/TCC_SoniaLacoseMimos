import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  
  produtos = [
  { nome: 'Laço Unicornio', imagem: 'img/laco_unicornio.jpg', preco: 'R$ 15,00' },
  { nome: 'Chapéu Junino', imagem: 'img/chapeu_junino.jpg', preco: 'R$ 20,00' },
  { nome: 'Laço de Boneca', imagem: 'img/laco_bonequinha.jpg', preco: 'R$ 25,00' },
  { nome: 'Tiaras Infantis', imagem: 'img/tiara_infantil.PNG', preco: 'R$ 20,00' },
  { nome: 'Tiaras de Laço', imagem: 'img/tiara_laco.PNG', preco: 'R$ 15,00' },
  { nome: 'Tiaras Coloridas', imagem: 'img/tiara_colorida.PNG', preco: 'R$ 20,00' }
];

  
  scroll(direction: 'left' | 'right') {
    const track = this.carouselTrack.nativeElement;
    const scrollAmount = 320; 
    if (direction === 'left') {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
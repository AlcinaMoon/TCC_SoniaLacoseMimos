import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeTab = 'sobre';

  themes: any = {
    sobre: { bg: '#DDECE9', text: '#134e4a' },
    loja: { bg: '#FFEBE0', text: '#9a3412' },
    home: { bg: '#FFDCE5', text: '#881337' },
    comunidade: { bg: '#F7B2BE', text: '#881337' },
    contato: { bg: '#9C828B', text: '#ffffff' }
  };

  get temaAtual() {
    return this.themes[this.activeTab];
  }

  mudarTab(tab: string) {
    this.activeTab = tab;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  enviarMensagem(event: Event) {
    event.preventDefault(); 
    alert('Mensagem enviada com sucesso! Em breve a Sônia responde.');
    
    
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
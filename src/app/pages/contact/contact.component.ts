import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  enviarMensagem(event: Event) {
    event.preventDefault(); // Impede a página de recarregar
    alert('Mensagem enviada com sucesso! Em breve a Sônia responde.');
    
    // Limpa o formulário (Typecast simples para HTMLFormElement)
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
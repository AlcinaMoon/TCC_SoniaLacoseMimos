import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
enviar() {
throw new Error('Method not implemented.');
}

  enviarMensagem(event: Event) {
    event.preventDefault(); // Evita que a página recarregue
    
    // Aqui você conectaria com um backend real no futuro
    alert('Mensagem enviada com sucesso! Em breve a Sônia responde.');
    
    // Limpa o formulário (Typecasting para HTMLFormElement para o TS não reclamar)
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
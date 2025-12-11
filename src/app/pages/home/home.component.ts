import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 


interface Post {
  nome: string;
  texto: string;
  tempo: string;
  avatarIcon: string;
  imagem?: string | null;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  
  usuarioLogado = false;
  exibirCadastro = false;
  
  
  loginData = {
    nome: '',
    email: 'cliente@sonialacos.com', 
    senha: '123' 
  };

  
  novoPostTexto = '';
  imagemPreview: string | null = null; 

 
  posts: Post[] = [
  { 
    nome: 'Christina de Souza', 
    texto: 'Muito bom! comprei um lacinho de chapéu junino para a minha filha, quase não acreditei em como o produto é de tão boa qualidade, espero novos lançamentos em breve', 
    tempo: '2 horas atrás',
    avatarIcon: 'fas fa-smile',
    imagem: null
  }
];

  
  ngOnInit() {
    
    const postsSalvos = localStorage.getItem('sonia-posts');
    if (postsSalvos) {
      this.posts = JSON.parse(postsSalvos);
    }
  }

  toggleForm(tipo: 'entrar' | 'cadastrar') {
    this.exibirCadastro = (tipo === 'cadastrar');
    
    if (this.exibirCadastro) {
        this.loginData = { nome: '', email: '', senha: '' };
    } else {
        this.loginData = { nome: '', email: 'cliente@sonialacos.com', senha: '123' };
    }
  }

  realizarLogin() {
   

    if (!this.loginData.email.trim() || !this.loginData.senha.trim()) {
      alert('Opa! Preenche o e-mail e a senha pra entrar, chefia.');
      return; 
    }

    if (this.exibirCadastro && !this.loginData.nome.trim()) {
      alert('Pô, diz aí qual é o seu nome pra gente te chamar!');
      return; 
    }

    this.usuarioLogado = true;
  }

  sair() {
    this.usuarioLogado = false;
    this.novoPostTexto = ''; 
    this.imagemPreview = null;
    this.loginData = { nome: '', email: 'cliente@sonialacos.com', senha: '123' };
  }

  
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    if(fileInput) fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagemPreview = e.target.result; 
      };
      reader.readAsDataURL(file);
    }
  }

  removerImagem() {
    this.imagemPreview = null;
  
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if(fileInput) fileInput.value = '';
  }

  criarPost() {
    if (!this.novoPostTexto.trim() && !this.imagemPreview) {
      alert('Escreve alguma coisa ou manda uma foto aí!');
      return;
    }

  
    this.posts.unshift({
      nome: this.loginData.nome || 'Você', 
      texto: this.novoPostTexto,
      tempo: 'Agora mesmo', 
      avatarIcon: 'fas fa-user',
      imagem: this.imagemPreview
    });

    
    this.salvarPostsLocalmente();

  
    this.novoPostTexto = ''; 
    this.removerImagem();
  }
  
  deletarPost(index: number) {
      this.posts.splice(index, 1);
    
      this.salvarPostsLocalmente();
  }

  
  salvarPostsLocalmente() {
    localStorage.setItem('sonia-posts', JSON.stringify(this.posts));
  }
}
import { Component, OnInit } from '@angular/core'; // Adicionei OnInit pra carregar os dados ao iniciar
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

// Interface para tipar o Post 
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
export class HomeComponent implements OnInit { // Implementa OnInit

  // Estado de Login
  usuarioLogado = false;
  exibirCadastro = false;
  
  // Dados pré-preenchidos pra agilizar teus testes
  loginData = {
    nome: '',
    email: 'cliente@sonialacos.com', 
    senha: '123' 
  };

  // Dados do Novo Post
  novoPostTexto = '';
  imagemPreview: string | null = null; 

  // Lista de Posts (Começa com um fake, mas depois carrega do LocalStorage)
  posts: Post[] = [
    { 
      nome: 'Maria Silva', 
      texto: 'Comprei o Kit #3 e estou apaixonada! Acabamento perfeito.', 
      tempo: '2 horas atrás',
      avatarIcon: 'fas fa-smile',
      imagem: null
    }
  ];

  // --- LÓGICA DE INICIALIZAÇÃO (Recuperar dados salvos) ---
  ngOnInit() {
    // Tenta buscar posts salvos no navegador
    const postsSalvos = localStorage.getItem('sonia-posts');
    if (postsSalvos) {
      this.posts = JSON.parse(postsSalvos);
    }
  }

  // --- LÓGICA DE LOGIN ---
  toggleForm(tipo: 'entrar' | 'cadastrar') {
    this.exibirCadastro = (tipo === 'cadastrar');
    
    if (this.exibirCadastro) {
        this.loginData = { nome: '', email: '', senha: '' };
    } else {
        this.loginData = { nome: '', email: 'cliente@sonialacos.com', senha: '123' };
    }
  }

  realizarLogin() {
    /**
     * ============================================================
     * CRITÉRIOS DE VALIDAÇÃO (Regras pro Login Passar):
     * ============================================================
     * 1. E-MAIL OBRIGATÓRIO:
     * - Verificamos: !this.loginData.email.trim()
     * - O que faz: O .trim() remove espaços vazios antes e depois. 
     * Se o usuário digitar só " ", o sistema barra.
     * * 2. SENHA OBRIGATÓRIA:
     * - Verificamos: !this.loginData.senha.trim()
     * - Critério: Não pode ser vazia.
     * * 3. NOME OBRIGATÓRIO (Só no Cadastro):
     * - Verificamos: this.exibirCadastro && !this.loginData.nome.trim()
     * - Critério: Se tiver na aba de cadastro, o nome não pode estar vazio.
     * ============================================================
     */

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

  // --- LÓGICA DE IMAGEM & POSTAGEM ---

  // Método auxiliar pra clicar no input escondido via código (se precisar)
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
    // Reseta o input file pro usuário poder selecionar a mesma imagem se quiser
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if(fileInput) fileInput.value = '';
  }

  criarPost() {
    if (!this.novoPostTexto.trim() && !this.imagemPreview) {
      alert('Escreve alguma coisa ou manda uma foto aí!');
      return;
    }

    // Adiciona o post no topo da lista
    this.posts.unshift({
      nome: this.loginData.nome || 'Você', 
      texto: this.novoPostTexto,
      tempo: 'Agora mesmo', // Num app real, usaria new Date()
      avatarIcon: 'fas fa-user',
      imagem: this.imagemPreview
    });

    // SALVA LOCALMENTE AGORA
    this.salvarPostsLocalmente();

    // Limpa os campos
    this.novoPostTexto = ''; 
    this.removerImagem();
  }
  
  deletarPost(index: number) {
      this.posts.splice(index, 1);
      // Atualiza o localStorage após deletar
      this.salvarPostsLocalmente();
  }

  // Função auxiliar pra gravar no navegador
  salvarPostsLocalmente() {
    localStorage.setItem('sonia-posts', JSON.stringify(this.posts));
  }
}
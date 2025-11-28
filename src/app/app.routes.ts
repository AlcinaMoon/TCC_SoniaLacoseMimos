import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ComunidadeComponent } from './pages/comunidade/comunidade.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
  ,
  {
    path: 'Sobre', component: AboutComponent
  }
  ,
  {
    path: 'Contato', component: ContactComponent
  }
  ,
  {
    path: 'Loja', component: ShopComponent
  }
  ,
  {
    path: 'Comunidade', component: ComunidadeComponent
  }
  ,
  {
    path: "Login", component: LoginComponent
  }
  
];


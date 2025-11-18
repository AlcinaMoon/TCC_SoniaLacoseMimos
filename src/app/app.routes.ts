import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegrasComponent } from './pages/regras/regras.component';
import { ShopComponent } from './pages/shop/shop.component';


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
    path: 'Regras', component: RegrasComponent
  }
  ,
  {
    path: 'Loja', component: ShopComponent
  }
  
];


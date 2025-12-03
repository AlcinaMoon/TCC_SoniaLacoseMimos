import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { CommunityComponent } from './pages/community/community.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre', pathMatch: 'full' },
  { path: 'sobre', component: AboutComponent },
  { path: 'loja', component: ShopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'comunidade', component: CommunityComponent },
  { path: 'contato', component: ContactComponent }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SpecialsComponent } from './specials/specials.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: MainComponent, data: {title: 'HomeFork - Main'}},
  { path: 'about', component: AboutComponent, data: {title: 'HomeFork - About'} },
  { path: 'menu', component: MenuComponent, data: {title: 'HomeFork - Menu'} },
  { path: 'specials', component: SpecialsComponent, data: {title: 'HomeFork - Specials'} },
  { path: 'contact', component: ContactComponent, data: {title: 'HomeFork - Contact'} },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

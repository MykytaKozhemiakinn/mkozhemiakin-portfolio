import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./view/home/home.component').then(mod => mod.HomeComponent), pathMatch: 'full' },
  { path: 'about-me', loadComponent: () => import('./view/about-me/about-me.component').then(mod => mod.AboutMeComponent) },
  { path: 'projects', loadComponent: () => import('./view/projects/projects.component').then(mod => mod.ProjectsComponent) },
  { path: 'contact', loadComponent: () => import('./view/contact/contact.component').then(mod => mod.ContactComponent) },
];

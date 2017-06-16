import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DecksComponent } from './decks/decks.component';
import { DeckDetailComponent } from './deck-detail/deck-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'decks',
    component: DecksComponent
  },
  {
    path: 'decks/:id',
    component: DeckDetailComponent
  },
  {
  path: 'admin',
  component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

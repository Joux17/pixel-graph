import { Routes } from '@angular/router';
import { DialogButtonComponent } from './components/dialog-button/dialog-button.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'dialog',
    component: DialogButtonComponent
  },
  {
    path: '**',
    component: HomeComponent
  },

];

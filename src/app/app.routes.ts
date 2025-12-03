import { Routes } from '@angular/router';
import { EventTimeTable } from './features/event-time-table/event-time-table';
  

export const routes: Routes = [
{
  path: '',
  loadComponent: () => import('./features/event-time-table/event-time-table').then(m => m.EventTimeTable)
}
];

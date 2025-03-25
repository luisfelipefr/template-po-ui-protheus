import { Routes } from '@angular/router';

import {RoutinesComponent} from './routines/routines.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index.html', pathMatch: 'full'},
    { path: 'contador', component: RoutinesComponent },
];

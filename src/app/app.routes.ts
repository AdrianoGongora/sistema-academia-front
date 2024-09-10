import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'dashboard',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'alumnos',
        loadComponent: () => import('./pages/alumnos/components/alumnos-list/alumnos-list.component')
            .then((c) => c.AlumnosListComponent)
    }

];

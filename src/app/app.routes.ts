import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'', //relative path of component
        redirectTo:'auth',
        pathMatch:'full',

    },
    {
        path:'auth',
        component:AuthLayoutComponent,
    },

    {
        path:'home',
        component:HomeLayoutComponent,
    },
    // Option 1: Directly Lazy Loading a Standalone Component
    // {
    //     path: 'next-flight',
    //     loadComponent: () => 
    //         import('./next-flight/next-flight.component')
    //             .then(m => m.NextFlightComponent)
    // },
    
    // Option 2: Lazy Loading another Routing Config
    // {
    //     path: 'flight-booking',
    //     loadChildren: () =>
    //         import('')
    //             .then(m => m.FLIGHT_BOOKING_ROUTES)
    // },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];

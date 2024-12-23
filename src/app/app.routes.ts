import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'product-detail', loadComponent: () => import('./pages/product-viewer/product-viewer.component').then(m => m.ProductViewerComponent) }, // Used Lazy loading for this route
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
    { path: '**', redirectTo: 'login' } // Wildcard route for a 404 page
];

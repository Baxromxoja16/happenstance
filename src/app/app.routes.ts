import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'product-detail', pathMatch: 'full' },
    { path: 'product-detail', loadComponent: () => import('./components/product/product-details/product-details.component').then(m => m.ProductDetailsComponent) }, // Used Lazy loading for this route
    { path: '**', redirectTo: 'product-detail' } // Wildcard route for a 404 page
];

import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard.js';
import { ProductViewerComponent } from './pages/product-viewer/product-viewer.component.js';

export const routes: Routes = [
    { path: '', redirectTo: 'main/product-detail', pathMatch: 'full' },
    { path: 'main', loadComponent: () => import('./pages/main.component').then(m => m.MainComponent), canActivate:[authGuard], children: [
        { 
            path: 'product-detail', 
            component: ProductViewerComponent, 
            canActivate:[authGuard] 
        },
    ]},
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
    { path: '**', redirectTo: 'main/product-detail' } // Wildcard route for a 404 page
];

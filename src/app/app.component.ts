import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductViewerComponent } from './product-viewer/product-viewer.component.js';
import { HeaderComponent } from './components/shared/header/header.component.js';

@Component({
  selector: 'app-root',
  imports: [ProductViewerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'happenstance';
}

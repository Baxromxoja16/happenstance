import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialShareComponent } from '../../shared/components/social-share/social-share.component.js';
import { FooterComponent } from '../../shared/components/footer/footer.component.js';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component.js';
import { ProductImageComponent } from './components/product-image/product-image.component.js';
import { ProductDetailsComponent } from './components/product-details/product-details.component.js';
import { SizeSelectorComponent } from './components/size-selector/size-selector.component.js';

@Component({
  selector: 'app-product-viewer',
  imports: [
    CommonModule, 
    SocialShareComponent, 
    FooterComponent, 
    ColorSelectorComponent, 
    ProductDetailsComponent, 
    ProductImageComponent, 
    SizeSelectorComponent
  ],
  templateUrl: './product-viewer.component.html',
  styleUrl: './product-viewer.component.scss',
  standalone: true
})
export class ProductViewerComponent {
  constructor() {}
}
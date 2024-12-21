import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialShareComponent } from '../components/shared/social-share/social-share.component.js';
import { ColorSelectorComponent } from '../components/product/color-selector/color-selector.component.js';
import { ProductDetailsComponent } from '../components/product/product-details/product-details.component.js';
import { ProductImageComponent } from '../components/product/product-image/product-image.component.js';
import { SizeSelectorComponent } from '../components/product/size-selector/size-selector.component.js';
import { FooterComponent } from '../components/shared/footer/footer.component.js';

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
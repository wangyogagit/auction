import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { FootComponent } from './foot/foot.component';
import { CarouselComponent } from './carousel/carousel.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './shared/product.service';

const routeConfig: Routes = [                          // 路由必须在module层
  {path: '' , component: HomeComponent},
  {path: 'product/:productId', component: ProductDetailComponent}
  // {path: 'product/:prodTitle', component: ProductDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ProductComponent,
    StarsComponent,
    FootComponent,
    CarouselComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)                      // 注入路由配置
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

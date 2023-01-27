import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddTagComponent } from './admin/add-tag/add-tag.component';
import { AddTagToProductComponent } from './admin/add-tag-to-product/add-tag-to-product.component';
import { onlinefooddeliverysystemComponent } from './onlinefooddeliverysystem/onlinefooddeliverysystem.component';
import { OrdersComponent } from './onlinefooddeliverysystem/orders/orders.component';
import { ProductsComponent } from './onlinefooddeliverysystem/products/products.component';
import { ShoppingCartComponent } from './onlinefooddeliverysystem/shopping-cart/shopping-cart.component';
import { DatePipe } from '@angular/common';
import { SangleProductComponent } from './onlinefooddeliverysystem/sangle-product/sangle-product.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddTagComponent,
    AddTagToProductComponent,
    onlinefooddeliverysystemComponent,
    OrdersComponent,
    ProductsComponent,
    ShoppingCartComponent,
    SangleProductComponent,
    UpdateProfileComponent,
    DisplayCategoryComponent,
    DisplayTagComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }

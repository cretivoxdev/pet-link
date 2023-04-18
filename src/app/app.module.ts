import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SwiperModule } from 'swiper/angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PetWorldComponent } from './pages/pet-world/pet-world.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ShopComponent } from './pages/shop/shop.component';
import { NotificationDetailComponent } from './pages/notification-detail/notification-detail.component';
import { ShopCheckoutComponent } from './pages/shop-checkout/shop-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetLostComponent } from './pages/pet-lost/pet-lost.component';
import { AdsDetailComponent } from './pages/ads-detail/ads-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PetWorldComponent,
    ProfileComponent,
    NotificationComponent,
    ShopComponent,
    NotificationDetailComponent,
    ShopCheckoutComponent,
    PetLostComponent,
    AdsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

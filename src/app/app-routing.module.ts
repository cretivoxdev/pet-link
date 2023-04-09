import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PetWorldComponent } from './pages/pet-world/pet-world.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopCheckoutComponent } from './pages/shop-checkout/shop-checkout.component';
import { NotificationDetailComponent } from './pages/notification-detail/notification-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pet-world/:id', component: PetWorldComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'notification-detail/:id', component: NotificationDetailComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop-checkout', component: ShopCheckoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

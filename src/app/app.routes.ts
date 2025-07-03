import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'products',component:ProductListComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
];

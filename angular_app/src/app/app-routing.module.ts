import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AuthGuard } from './guards/auth.guard';
import { CandeactivateGuard } from './guards/candeactivate.guard';
import { RegisterComponent } from './register/register.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full' }, // http://localhost:4200/
  { path: 'login', component: LoginComponent},
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent} ,// http://localhost:4200/
  { path: 'about' , component: AboutComponent} , // http://localhost:4200/about
  { path: 'contact', component: ContactComponent},
  { path: 'postlist', component: PostlistComponent},
  { path: 'postDetails/:id', component: PostdetailsComponent},
  {
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m=> m.ProductsModule)
  },
  {path: 'register', component: RegisterComponent, canDeactivate:[CandeactivateGuard]},
  { path: 'rapidapi', component: RapidapiComponent},
  { path: 'rxjs', component: RxjsComponent},
  { path: '**', component: PagenotfoundComponent}, // http://localhost:4200/contact
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { AboutComponent } from './main/about/about.component';
import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';
import { ContactComponent } from './main/contact/contact.component';
import { MemberComponent } from './main/member/member.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  { path: '', component: MainComponent },
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'member/:id', component: MemberComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

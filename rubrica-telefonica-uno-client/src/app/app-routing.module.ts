import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountPageComponent } from './count-page/count-page.component';
import { ErrorMessagePageComponent } from './error-message-page/error-message-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: 'full'},
  { path: "count", component: CountPageComponent},
  { path: "error", component: ErrorMessagePageComponent},
  { path: "login", component: LoginPageComponent},
  { path: "main", component: MainPageComponent},
  { path: "search", component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

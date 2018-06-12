import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginModule } from './modules/login/login.module';
import { MainPageModule } from './modules/main-page/main-page.module';
import { UsersModule } from './modules/users/users.module';

export const routes: Routes = [
    {
      path: 'home',
      loadChildren: 'src/app/modules/main-page/main-page.module#MainPageModule'
    },
    {
      path: 'login',
      loadChildren: 'src/app/modules/login/login.module#LoginModule'
    },
    {
      path: 'users',
      loadChildren: 'src/app/modules/users/users.module#UsersModule'
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}

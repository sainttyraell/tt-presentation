import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutes } from './main-page.routes';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutes
  ],
  exports: [
    MainPageComponent
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule { }

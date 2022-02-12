import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { AnimationModule } from './animation/animation.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  }
];
@NgModule({
  imports: [
    HomeModule,
    AnimationModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

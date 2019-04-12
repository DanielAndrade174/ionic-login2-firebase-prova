import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroVisualizaPage } from './livro-visualiza';

@NgModule({
  declarations: [
    LivroVisualizaPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroVisualizaPage),
  ],
})
export class LivroVisualizaPageModule {}

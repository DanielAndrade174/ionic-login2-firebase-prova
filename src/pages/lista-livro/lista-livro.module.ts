import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLivroPage } from './lista-livro';

@NgModule({
  declarations: [
    ListaLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLivroPage),
  ],
})
export class ListaLivroPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Produto } from '../../model/produto';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html',
})
export class ListaProdutoPage {

  listaDeProdutos : Produto[] = [];//<--
  firestore = firebase.firestore();// Inicio um instancia do banco
  settings = {timestampsInSnapshots: true};//<--

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu : MenuController) {

      this.firestore.settings(this.settings); //<--
      
  }

  ionViewDidLoad() {
    this.menu.enable(true);
    this.getList();
  }

  getList() {

    var ref = firebase.firestore().collection("produto");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Produto();
            c.setDados(doc.data());
            c.id = doc.id;
            this.listaDeProdutos.push(c);
        });
    });

  }

  novoProduto(){
    this.navCtrl.push('NovoProdutoPage');
  }

  remove(obj : Produto){
    var ref = firebase.firestore().collection("produto");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeProdutos = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }

  atualiza(obj : Produto){
    this.navCtrl.push('ProdutoVisualizaPage',{'produto' : obj})
  }

}

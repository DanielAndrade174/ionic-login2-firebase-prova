import firebase from "firebase";
import { Produto } from "../model/produto";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutoService{

    firestore = firebase.firestore();//<--
    settings = {timestampsInSnapshots: true};//<--
    listaDeProdutos : Produto[] = [];

    constructor(){
        this.firestore.settings(this.settings); //<--
    }

    getList() : Produto[]{

     

        var ref = this.firestore.collection("produto");
        
        ref.get().then(query => {
            query.forEach(doc => {
                let c = new Produto();
                c.setDados(doc.data());
                this.listaDeProdutos.push(c);
            });
        });

        return this.listaDeProdutos;
      }
}
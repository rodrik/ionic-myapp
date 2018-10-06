import { Component } from '@angular/core';

import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  selectedAddress: Endereco;
  items: Endereco[];
  showList: boolean;

  logradouro: string = '';
  cidade: string = '';
  uf: string = '';

  constructor( private viacep: NgxViacepService ) {
    this.selectedAddress 
  }

  onCancel(ev: any) {
    this.showList = false;
  }

  onInputCEP(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    
    if(val.length == 8) {

      this.viacep.buscarPorCep(val).then( ( endereco: Endereco ) => {
        // Endereço retornado :)
        console.log(endereco);
        this.selectAddress(endereco);
        
       }).catch( (error: ErroCep) => {
        // Alguma coisa deu errado :/
        console.log(error.message);
        this.selectAddress(null);
      });

    } 

  }

  onInput(ev: any) {
    const val = ev.target.value;

    if(val.length > 3) {

      this.viacep.buscarPorEndereco('PR', 'Curitiba', val).then( ( enderecos: Endereco[] ) => {
        // Endereço retornado :)
        console.log(enderecos);
        this.items = enderecos;
        this.showList = true;
        
       }).catch( (error: ErroCep) => {
        // Alguma coisa deu errado :/
        console.log(error.message);
        this.selectAddress(null);
      });

    } else {
      this.showList = false;
    }
  }

  selectAddress(address: Endereco) {
    this.selectedAddress = address;
    console.log(address);
    this.showList = false;
  }


}

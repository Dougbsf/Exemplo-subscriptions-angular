import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subscriptions-example';
  //variavel que exibe o valor na tela
  serviceValue: boolean = null;
  //array de subscriptions
  subsArray: Array<Subscription> = [];

  constructor(
    //injection do AppService
    private appService: AppService
  ){}

  ngOnInit(){
    //define os subscribers que usaremos no componente
    this.setSubscribers();
  }

  setSubscribers(){
    //define o subscribe dentro de uma variavel para que possamos armazena-la dentro do array de subscriptions
    const valueSub = this.appService.subjectValue.subscribe( response => {
      this.serviceValue = response;
    });
    this.subsArray.push(valueSub);
  }

  //ngDestroy é chamado quando o componente não estiver mais disponível para o usuário
  //dentro dele chamamos a função que ira desfazer todos os subscribers que estiverem dentro do nosso array
  ngDestroy(){
    this.unsubScribeAll();
  }

  //desfaz todas as subscriptions que estiverem na variavel subsArray
  unsubScribeAll(){
    this.subsArray.forEach(element => {
      element.unsubscribe();
    });
  }

}



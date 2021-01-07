import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //definimos um Subject para que possamos realizar um subscribe nele e "escutar" novos valores
  subjectValue: Subject<boolean> = new Subject();
  //aqui vamos armazenar o valor atual do subject
  currentValue: boolean = false;


  constructor() {
    //setInterval para inverter o valor do nosso subject indefinidamente
    setInterval(() => {

      if(this.currentValue){
        this.currentValue = false;
        this.subjectValue.next(this.currentValue);
      }else{
        this.currentValue = true;
        this.subjectValue.next(this.currentValue);
      }

    }, 1000);
  }

}

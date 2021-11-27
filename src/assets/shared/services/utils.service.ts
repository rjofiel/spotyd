import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor(){}

  generateId(): string {
    let uuid = '';

    const stringArr = ['spd'];

    for(let i = 0; i<8; i++){
      const S4 = (((1+Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    console.log(stringArr.join('-'));
    uuid = stringArr.join('-');
    return uuid;
  }



}

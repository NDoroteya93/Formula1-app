import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  save(name, data) {

    let localData: any = localStorage.getItem('drivers');
    if (localData) {
      localData = JSON.parse(localData);
    } else {
      localData = {};
      localData[name]= new Array(5);
    }

    if(localData[name].length >= 5){ 
      localData[name].shift();
    }
    localData[name].push(data);

    localStorage.setItem('drivers', JSON.stringify(localData))
  }

  get(name) {

    let data = JSON.parse(localStorage.getItem('drivers'));
    console.log(data);
    if (!data) {
      return undefined;
    }
    if (name) {
      if (data[name]) {
        return data[name];
      } else {
        return {};
      }
    }
    return data;
  }




}
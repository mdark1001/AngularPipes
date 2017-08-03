import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean=true): string {
    value=value.toLowerCase();
    let array=value.split(" ");
    if(todas){
      for(let i in array){
          array[i]=array[i][0].toUpperCase()+ array[i].substr(1);
      }
    }else{
          array[0]=array[0][0].toUpperCase()+ array[0].substr(1);
    }
    return array.join(" ");
  }
}

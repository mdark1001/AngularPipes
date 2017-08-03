import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre:string='Miguel';
  areglo=[1,2,3,4,5,6,7,8,9];
  PI=Math.PI;
  porcentaje=0.224;
  salario=12354;
  heroe={
    nombre:"Logan",
    alias:'Wolwerine',
    casa:'numero 19',
    poder:'inmortal'
  }

  valorDePromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Llego la data'),3500);
  });
  fecha=new Date();

  nombre2='juan mIguel cabrera';
  video='VqoyKzgkqR4';
  activar:boolean=true;

}

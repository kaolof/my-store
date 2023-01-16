import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'kao';
  age=18;
  img='https://source.unsplash.com/random';
  btnDisabled=true;
  //object
  person={
    name: 'Nicolas',
    age: 18,
    avatar:'https://source.unsplash.com/random'
  }

  names: string[]=['Nico', 'Juli', 'Santi'];
  newName='';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/ICONO 1.png',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/ICONO 2.png'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/ICONO 3.png'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/ICONO 4.png'
    }

  ]

  toggleButton(){
    this.btnDisabled=!this.btnDisabled;
  }
  increaseAge(){
    this.person.age+=1;
  }
  onScroll(event:Event){
    const element=event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element=event.target as HTMLInputElement;
    this.person.name=element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName='';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }
}

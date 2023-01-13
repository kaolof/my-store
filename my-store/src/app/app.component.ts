import { Component } from '@angular/core';

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
}

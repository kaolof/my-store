import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'kao';
  age=18;
  img='https://source.unsplash.com/random';
  btnDisabled='true';
  //object
  person={
    name: 'Nicolas',
    age: 18,
    avatar:'https://source.unsplash.com/random'
  }

  onScroll(event:Event){
    
  }
}

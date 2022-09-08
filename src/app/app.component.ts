import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  // created new arrays and functions for the single page application 
  count = 1;

  listOfNumbers = [1,32,32,55];
  listOfNames = ["Rohan","RAJ","Abhishek","Rinchen"];
  decreaseCount = () => {
    console.log('Decrement Button clicked');
    this.count--;
  }
  increaseCount = () => {
    console.log("Increment button clicked");
    this.count++;
  }
}

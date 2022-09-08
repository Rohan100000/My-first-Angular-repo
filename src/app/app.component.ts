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

  // 2 inputs for calculator
  num1 = 0;
  num2 = 0;
  value = this.num1 + this.num2;
  // Functions
  addNumbers = () => {
    console.log("before:" + this.value);
    this.value = this.num1 + this.num2;
    console.log("after:" + this.value);
  }
  subtractNumbers = () => {
    console.log("before:" + this.value);
    this.value = this.num1 - this.num2;
    console.log("after:" + this.value);
  }
  multiplyNumbers = () => {
    console.log("before:" + this.value);
    this.value = this.num1 * this.num2;
    console.log("after:" + this.value);
  }
  divideNumbers = () => {
    console.log("before:" + this.value);
    this.value = this.num1 / this.num2;
    console.log("after:" + this.value);
  }
  decreaseCount = () => {
    console.log('Decrement Button clicked');
    this.count--;
  }
  increaseCount = () => {
    console.log("Increment button clicked");
    this.count++;
  }
}

import { Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})
export class HomePageComponent  {
  backgroundImage = 'url("assets/rainy-10.gif")';

  

  constructor() {
    // Start the transitions
    this.startTransitions();
  }

  startTransitions() {
    setTimeout(() => {
      // Transition 1: from gif1.gif to gif2.gif
      this.backgroundImage = 'url("assets/sun.gif")';

      setTimeout(() => {
        // Transition 2: from gif2.gif to gif3.gif
        this.backgroundImage = 'url("assets/snow.gif")';

        

          
        }, 3000); // Adjust the timing for each transition as needed
      }, 3000); // Adjust the timing for each transition as needed
     // Adjust the timing for each transition as needed
  }
}
 

  


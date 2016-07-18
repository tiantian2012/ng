import { Component } from '@angular/core';
<<<<<<< HEAD
import { NgForm }    from '@angular/common';
import { Hero }    from './hero';
@Component({
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html',
  styleUrls: ['hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
=======
import { NgForm } from '@angular/forms';

import { Hero } from './hero';

@Component({
    selector:'hero-form',
    templateUrl:'./hero-form.component.html'
})
export /**
 * HeroFormComponent
 */
class HeroFormComponent {
    constructor() {
        
    }
   
    powers = ['Really smart','Super Flexible','Super Hot','Weather Changer'];
    
    model = new Hero(18,'Dr IQ',this.powers[0],'Chuck Overstreet');
    
    submitted = false;
  
    onsubmit(){
        this.submitted = true;
    }

    get diagnostic(){
        return JSON.stringify(this.model);
    }
}
>>>>>>> 996d50b6a24699de81e189989e6baf1871678818

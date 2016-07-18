import { Component } from '@angular/core';
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
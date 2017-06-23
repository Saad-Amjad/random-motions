import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MOTIONS } from './motion-list';
import { Motion } from './motion.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public form: FormGroup;
  public index: number = 0;
  public motion = null;
  public randomMotion = null;

  ngOnInit() {
    this.initForm();
    this.initMotion();
  }

  private initForm() {
    this.form = new FormGroup({
      text: new FormControl(null)
    });
  }

  private initMotion() {
    const list = this.getMotions();
    this.motion = list[0].text.split('\n');
    const array = {};

    for (let motion of this.motion) {
      if (motion != '' && motion.length > 30) {
        array[this.index] = motion;
        this.index++;
      }
    }
    this.motion = array;
    this.randomMotion = this.motion[0];

  }

  private getMotions(): Motion[] {
    return MOTIONS;
  }

  private getRandomMotion() {
    const randomNumberWithinRange = Math.random() * (this.index - 0) + 0;
    const randomIndex = parseInt(JSON.stringify(randomNumberWithinRange), 10);
    this.randomMotion = this.motion[randomIndex];
  }

}




import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loading-screen',
  templateUrl: './loader-screen.component.html',
  styleUrls: ['./loader-screen.component.scss']
})


export class LoaderScreenComponent {

  private isVisible: boolean = true;

  constructor() { }

  @Input('objectToCheck') asynObject: boolean;

  ngDoCheck() {
    if (this.asynObject) {
      this.isVisible = false;
    }
  }
}
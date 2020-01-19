import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  @Input() public fromAppParent;
  @Output() public testComponentEvent = new EventEmitter();
  public name = "Ron Jones Gwapo";
  public myId = "01234";
  public isDisabled =false;
  public h2Class = "text-danger";
  public naayError =true;
  public isItalic = true;
  public greeting = "";
  public username =  "";
  public show = true;
  public names = ['ronron','ginapie','raigin','bboy','jingle'];
  public messageClasses = {
    "text-success" : !this.naayError,
    "text-danger" : this.naayError,
    "font-italic" : this.isItalic
  }

  constructor() { }

  ngOnInit() {
  }
  callMyName()
  {
    return "Calling " + this.name;
  }
  buttonClick()
  {
    console.log("Hey there gwapo!");
  }
  showName(x)
  {
    console.log(x);    
  }
  showHideName()
  {
    this.show = !this.show;
  }
  fireButtonClick()
  {
    this.testComponentEvent.emit('I came from Child Event.');
  }
}

import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [NgClass],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css',
})
export class SecondChildComponent {
  @Input() task: any;
  @Output() delete = new EventEmitter<any>();
  @Output() complete = new EventEmitter<any>();

  Completed(id:number){
    this.complete.emit(id);
  }
  Delete(id:number){
    this.delete.emit(id);
  }

}

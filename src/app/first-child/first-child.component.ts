import { Component, NgModule , Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css',
})
export class FirstChildComponent {
  input_value: string = '';
  @Output() sendData = new EventEmitter<string>();

  Add() {
    this.sendData.emit(this.input_value);
    this.input_value = '';
  }
}

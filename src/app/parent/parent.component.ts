import { Component } from '@angular/core';
import { FirstChildComponent } from '../first-child/first-child.component';
import { SecondChildComponent } from '../second-child/second-child.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FirstChildComponent, SecondChildComponent, NgClass],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  tasksArray: Array<any> = [];
  counter: number = 0;
  hascompleted: boolean = false;

  handleData(input_value: string) {
    if (input_value !== '') {
      this.tasksArray.push({
        id: this.counter,
        title: input_value,
        hascompleted: false,
      });
      this.counter++;
      input_value = '';
    } else {
      console.log('error');
    }
  }
  handleDelete(id: number) {
    this.tasksArray = this.tasksArray.filter((t) => t.id !== id);
  }
  handleCompleted(id: number) {
    this.tasksArray.forEach((t) => {
      if (t.id === id) {
        t.hascompleted = true;        
        }
    });
  }
  
  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      todo works!
    </p>
  `,
  styles: [
  ]
})
export class TodoComponent {

}

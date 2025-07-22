import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child {
  @Input() username: string = "";
  id: number = 5;
  @Output() idevent: EventEmitter<number> = new EventEmitter<number>();

  setid() {
    this.idevent.emit(this.id);
  }
}

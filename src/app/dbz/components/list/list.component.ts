import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Truncks',
    power: 500
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeletedCharacter(id?: string): void{
    if (!id) return;
    this.onDelete.emit(id);
  }
}



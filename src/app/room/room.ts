import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  standalone: false,
  templateUrl: './room.html',
  styleUrl: './room.css'
})
export class Room {
  records: {
    name: string;
    amount: number;
    purpose: string;
    date: string;
  }[] = [];

  newEntry = {
    name: '',
    amount: 0,
    purpose: '',
    date: ''
  };

  insert() {
    if (this.newEntry.name && this.newEntry.amount && this.newEntry.purpose && this.newEntry.date) {
      this.records.push({ ...this.newEntry });
      this.newEntry = { name: '', amount: 0, purpose: '', date: '' };
    }
  }
}
